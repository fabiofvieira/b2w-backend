module.exports = function(application) {
    // Listar
    application.get('/planetas', function(req, res, next){
        application.app.controllers.planets.list(req, res, next);
    });
    
    // Adicionar
    application.get('/planetas/adicionar', function(req, res, next){
        application.app.controllers.planets.add(req, res, next);
    });


    // Buscar por Nome
    application.get('/planetas/nome/', function(req, res, next){
        console.log('NOME');
        application.app.controllers.planets.retrieveByName(req, res, next);
    });

    // Buscar Por Id
    application.get('/planetas/id/:id', function(req, res, next){
        console.log('ID');
        application.app.controllers.planets.retrieveById(req, res, next);
    });
    
    
    // Remover
    application.delete('/planetas/:id', function(req, res, next){
        application.app.controllers.planets.delete(req, res, next);
    });
}