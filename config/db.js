var mongo = require('mongodb');

var connMongoDB = function() {
    console.log('Entrou na função de conexão com MongoDB');
    var db = new mongo.Db('b2wstarwars', new mongo.Server('localhost', 27017, {}),{});
    return db;
}

module.exports = function() {
    return connMongoDB;
}