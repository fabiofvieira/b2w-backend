var ObjectId = require('mongodb').ObjectId;
var Http = require('http');
var Querystring = require('querystring');
function Planet(connection) {
    this._connection = connection();
    this._table = 'planets';
}

Planet.prototype.getList = function(callback) {
    const table = this._table;
    this._connection.open((err, mongoclient) => {
        mongoclient.collection(table, (err, collection) => {
            callback(collection.find());
        });
    });
}

Planet.prototype.insert = function(data, callback) {

}

Planet.prototype.findBy = function(findBy, param, callback) {
    if(findBy == 'undefined') findBy = 'name';
    const table = this._table;
    var query = {};
    query[findBy] = `/${param}/`;
    this._connection.open((err, mongoclient) => {
        mongoclient.collection(table, (err, collection) => {
            callback(collection.find(query));
        });
    });

}

Planet.prototype.delete = function(id, callback) {

}

Planet.prototype.checkIfExists = function(name, callback) {

}

Planet.prototype.getDataFromApi = function(name, callback) {
    var _api_uri = 'https://swapi.co/api/planets/?search=';
    var nameParsed = Querystring.stringify(name);
    var xhr = Http.get({}, function(res) {
        console.log('STATUS', xhr.statusCode);
        console.log('HEADERS', JSON.stringify(res.headers));
    });

}


module.exports = function() {
    return Planet;
}