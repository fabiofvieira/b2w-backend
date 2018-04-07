const PlanetModel = require('../models/planet')();
const ObjectId = require('mongodb').ObjectId;
const PlanetRepository = require('../repositories/planets');

module.exports.list = function(req, res, next) {
    PlanetRepository
        .listPlanets()
        .then(planets => planets.length ? res.json(planets) : res.sendStatus(204))
        .catch(err => res.status(500).send('Ocorreu um erro ao listar os planetas. ' + err.errmsg));
}

module.exports.add = function(req, res, next) { 
    PlanetRepository
        .insertPlanet(req.body)
        .then(planet => planet ? res.json(planet) : res.sendStatus(204) )
        .catch(err => res.status(500).send('Ocorreu um erro ao inserir planeta. ' + err.errmsg));
}

module.exports.delete = function(req, res, next) {
    PlanetRepository
        .deletePlanet(req.params.id)
        .then(result => result ? res.json(result) : res.sendStatus(204))
        .catch(err => res.status(500).send('Não foi possivel remover este planeta. ' + err.errmsg));
}

module.exports.retrieveById = function(req, res, next) {   
    PlanetRepository
        .findBy('_id', req.params.id)
        .then(result => result ? res.json(result) : res.sendStatus(204))
        .catch(err => res.status(500).send('Ocorreu um erro ao buscar este planeta. ' + err.errmsg));
}

module.exports.retrieveByName = function(req, res, next) {  
    PlanetRepository
        .findBy('name', req.query.name)
        .then(result => result ? res.json(result) : res.sendStatus(204))
        .catch(err => res.status(500).send('Ocorreu um erro ao buscar este planeta. ' + err.errmsg));
}