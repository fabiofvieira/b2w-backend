module.exports.list = function(application, req, res) {
    var conn = application.config.db;
    var planet = new application.app.models.planet(conn);
    planet.getList(results => {
        results.toArray((err, result) => {
            res.json(result);
        });
    });
    return;
}

module.exports.add = function(application, req, res) {
    res.json({ola: 'oi'});
    return;
}

module.exports.retrieveById = function(application, req, res) {
    res.json({ola: 'oi'});
    return;
}

module.exports.retrieveByName = function(application, req, res) {
    res.json({ola: 'oi'});
    return;
}

module.exports.delete = function(application, req, res) {
    res.json({ola: 'oi'});
    return;
}