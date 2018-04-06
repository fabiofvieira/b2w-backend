var axios = require('axios');
var querystring = require('querystring');
module.exports.getPlanet = async function(name) {
    const resp = await axios('http://swapi.co/api/planets/?' + querystring.stringify({ search: name }));
    return resp;
}