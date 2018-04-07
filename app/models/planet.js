const mongoose = require('mongoose')

const Model = mongoose.model('Planet', new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    terrain: {
        type: String,
        required: true
    },
    climate: {
        type: String,
        required: true
    },
    apparitions: {
        type: Number
    }
}));

module.exports = function() { return Model };