module.exports = function(application) {
    // Listar
    application.get('/planetas', function(req, res){
        application.app.controllers.planets.list(application, req, res);
    });
    
    // Adicionar
    application.post('/planetas/adicionar', function(req, res){
        application.app.controllers.planets.add(application, req, res);
    });

    // Buscar Por Id
    application.post('/planetas/:id', function(req, res){
        application.app.controllers.planets.retriveById(application, req, res);
    });
    // Buscar por Nome
    application.post('/planetas/buscar-nome', function(req, res){
        application.app.controllers.planets.retrieveByName(application, req, res);
    });
    
    // Remover
    application.delete('/planetas/:id', function(req, res){
        application.app.controllers.planets.delete(application, req, res);
    });
}