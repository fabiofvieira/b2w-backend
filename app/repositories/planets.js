const Planet = require('../models/planet')();
const SWApi = require('../services/swapi');
const ObjectId = require('mongodb').ObjectId;

module.exports.listPlanets = function() 
{
    return Planet.find();
}

module.exports.insertPlanet = async function(data) 
{
    data.apparitions = 0;
        await SWApi
            .getPlanet(data.name)
            .then(r => {
                if(r.data.count == 1)
                    data.apparitions = r.data.results[0].films.length;
            })
            .catch(err => res.status(500).json({success:false, message: 'Não foi possivel coletar informação do SWAPI'}));
    
    return Planet.create({
        name: data.name,
        terrain: data.terrain,
        climate: data.climate,
        apparitions: data.apparitions
    });
}

module.exports.deletePlanet = function(id) 
{
    return Planet.remove({_id: new ObjectId(id)});
}

module.exports.findBy = function(field, value) 
{
    if(field == '_id') {
        return Planet.findOne({_id: new ObjectId(value)});
    } else if(field == 'name') {
        return Planet.find({name: new RegExp("^" + value + "$", "i")});
    } else if(field == 'exact_name') {
        return Planet.findOne({name: field});
    }
}