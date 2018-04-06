const Planet = require('../models/planet')();
const SWApi = require('../services/swapi');
const ObjectId = require('mongodb').ObjectId;

module.exports.listPlanets = function() 
{
    return Planet.find();
}

module.exports.insertPlanet = function(data) 
{
    data.apparitions = 0;
    SWApi
        .getPlanet(data.name)
        .then(r => {
            if(r.data.count == 1)
                data.apparitions = r.data.results[0].films.length;
                return Planet.create({
                    name: data.name + ' rand ' + parseInt(Math.random() * 1000),
                    terrain: data.terrain,
                    climate: data.climate,
                    apparitions: data.apparitions
                });
        })
        .catch(err => json.sendStatus(500));
}

module.exports.deletePlanet = function(id) 
{
    return Planet.delete({_id: new ObjectId(id)});
}

module.exports.findBy = function(field, value) 
{
    var query = {}
    if(field == '_id') {
        query[field] = new ObjectId(value);
    } else if(field == 'nome') {
        query[field] = new RegExp("^" + value + "$", "i");
    }

    return Planet.findOne(query);
}