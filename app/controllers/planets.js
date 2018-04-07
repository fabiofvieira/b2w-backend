const PlanetModel = require('../models/planet')();
const ObjectId = require('mongodb').ObjectId;
const PlanetRepository = require('../repositories/planets');

module.exports.list = function(req, res, next) {
    PlanetRepository
        .listPlanets()
        .then(planets => planets.length ? res.json(planets) : res.sendStatus(204))
        .catch(err => res.status(500).send('Ocorreu um erro ao listar os planetas. ' + err));
}

module.exports.add = function(req, res, next) { 
    PlanetRepository
        .insertPlanet(req.body)
        .then(planet => planet ? res.json(planet) : res.sendStatus(204) )
        .catch(err => { 
            var message = err.errmsg ? err.errmsg : err;
            res.status(500).send('Ocorreu um erro ao inserir planeta. ' + message)
        });
}

module.exports.delete = function(req, res, next) {
    PlanetRepository
        .deletePlanet(req.params.id)
        .then(result => result ? res.json(result) : res.sendStatus(204))
        .catch(err => res.status(500).send('Não foi possivel remover este planeta. ' + err));
}

module.exports.retrieveById = function(req, res, next) {   
    PlanetRepository
        .findBy('_id', req.params.id)
        .then(result => result ? res.json(result) : res.sendStatus(204))
        .catch(err => res.status(500).send('Ocorreu um erro ao buscar este planeta. ' + err));
}

module.exports.retrieveByName = function(req, res, next) {  
    PlanetRepository
        .findBy('name', req.query.name)
        .then(result => result ? res.json(result) : res.sendStatus(204))
        .catch(err => res.status(500).send('Ocorreu um erro ao buscar este planeta. ' + err));
}