const PlanetModel = require('../models/planet')();
const ObjectId = require('mongodb').ObjectId;
const PlanetRepository = require('../repositories/planets');

module.exports.list = function(req, res, next) {
    PlanetRepository
        .listPlanets()
        .then(planets => planets.length ? res.json({success:true, data: planets}) : res.json({success:true, data: []}))
        .catch(err => res.status(500).json({success: false, message: 'Ocorreu um erro ao listar os planetas. ' + err}));
}

module.exports.add = function(req, res, next) { 
    PlanetRepository
        .insertPlanet(req.body)
        .then(planet => planet ? res.json({success: true, data: planet, message: 'Planeta criado com sucesso!'}) : res.sendStatus(204) )
        .catch(err => { 
            var m = err.errmsg ? err.errmsg : err;
            res.status(500).json({success: false, message: 'Ocorreu um erro ao inserir planeta. ' + m})
        });
}

module.exports.delete = function(req, res, next) {
    PlanetRepository
        .deletePlanet(req.params.id)
        .then(result => result ? res.json({success:true, message: result.n == 0 ? 'Nenhum planeta encontrado' : 'Planeta removido com sucesso!' }) : res.sendStatus(204))
        .catch(err => res.status(500).json({success: false, message: 'Não foi possivel remover este planeta. ' + err}));
}

module.exports.retrieveById = function(req, res, next) {   
    PlanetRepository
        .findBy('_id', req.params.id)
        .then(result => result ? res.json({success: true, data: result}) : res.json({success:true, data:[], message: 'Planeta não encontrado'}))
        .catch(err => res.status(500).send('Ocorreu um erro ao buscar este planeta. ' + err));
}

module.exports.retrieveByName = function(req, res, next) {  
    PlanetRepository
        .findBy('name', req.query.name)
        .then(result => result ? res.json({success: true, data: result}) : res.json({success:true, message: 'Planeta não encontrado'}))
        .catch(err => res.status(500).json({success:false, message: 'Ocorreu um erro ao buscar este planeta. ' + err}));
}