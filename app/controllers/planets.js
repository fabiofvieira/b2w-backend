const PlanetModel = require('../models/planet')();
const ObjectId = require('mongodb').ObjectId;
const SWApi = require('../services/swapi');
const query = require('querystring');

module.exports.list = function(req, res, next) {
    PlanetModel
        .find()
        .then(planets => planets.length ? res.json(planets) : res.sendStatus(204))
        .catch(err => json.sendStatus(500));
}

module.exports.add = function(req, res, next) {   
    var data = {name: 'Tatooine'}; //req.params;
    SWApi.getPlanet(data.name)
        .then(r => {
            res.json(r.data.results);
        })
        .catch(err => json.sendStatus(500));

    /*PlanetModel
        .create(data)
        .then(result => res.json(result))
        .catch(err => res.json(err));*/
}

module.exports.delete = function(req, res, next) {
    PlanetModel
        .remove({_id: new ObjectId(req.params.id)})
        .then(result => result ? res.json(result) : res.sendStatus(204))
        .catch(err => json.sendStatus(500));
}

module.exports.retrieveById = function(req, res, next) {   
    PlanetModel
        .findOne({_id: new ObjectId(req.params.id)})
        .then(result => result ? res.json(result) : res.sendStatus(204))
        .catch(err => json.sendStatus(500));
}

module.exports.retrieveByName = function(req, res, next) {   
    PlanetModel
        .find({name: new RegExp("^" + req.params.name + "$", "i")})
        .then(result => result ? res.json(result) : res.sendStatus(204))
        .catch(err => json.sendStatus(500));
}