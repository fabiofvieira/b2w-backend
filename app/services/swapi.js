var axios = require('axios');
var querystring = require('querystring');
module.exports.getPlanet = function(name) {
    var _url = 'http://swapi.co/api/planets/?' + querystring.stringify({ search: name });
    return axios.get(_url);
}