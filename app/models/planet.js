const mongoose = require('mongoose')

const Model = mongoose.model('Planet', new mongoose.Schema({
    name: {
        type: String,
        validate: {
            validator: (v) => {
                return new Promise((resolve, reject) => {
                    Model.find({name: v}).then(planet => {
                        (planet.length == 0) ? resolve(true) : resolve(false)
                    }).catch(err => resolve(false))
                })
            },
            message: 'Planeta já existe'
        },
        required: [true, 'Nome é obrigatorio']
        
    },
    terrain: {
        type: String,
        required:  [true, 'Terreno é obrigatorio']
    },
    climate: {
        type: String,
        required:  [true, 'Clima é obrigatorio']
    },
    apparitions: {
        type: Number
    }
}));

module.exports = function() { return Model };