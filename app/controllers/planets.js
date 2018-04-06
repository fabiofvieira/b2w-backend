const PlanetModel = require('../models/planet')();
const ObjectId = require('mongodb').ObjectId;
const PlanetRepository = require('../repositories/planets');

module.exports.list = function(req, res, next) {

    PlanetRepository
        .listPlanets()
        .then(planets => planets.length ? res.json(planets) : res.sendStatus(204))
        .catch(err => res.sendStatus(500));
}

module.exports.add = function(req, res, next) {   
    var data = {name: 'Tatooine', terrain: 'Quente', climate: 'adasdas'};
    PlanetRepository.insertPlanet(data).then(planet => planet ? res.json(planet) : res.sendStatus(204) );
}

module.exports.delete = function(req, res, next) {
    PlanetRepository
        .deletePlanet(req.params.id)
        .then(result => result ? res.json(result) : res.sendStatus(204))
        .catch(err => res.sendStatus(500));
}

module.exports.retrieveById = function(req, res, next) {   
    PlanetRepository
        .findBy('_id', req.params.id)
        .then(result => result ? res.json(result) : res.sendStatus(204))
        .catch(err => res.json(err));
}

module.exports.retrieveByName = function(req, res, next) {   
    PlanetRepository
        .findBy('name', req.params.name)
        .then(result => result ? res.json(result) : res.sendStatus(204))
        .catch(err => res.sendStatus(500).json(err));
}