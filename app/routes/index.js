module.exports = function(application) {
    
    application.route('/planetas')
        .get((req, res, next) => {
            if(req.query.name){
                 /* Get By Name */
                application.app.controllers.planets.retrieveByName(req, res, next);    
            } else {
                /* Get All */
                application.app.controllers.planets.list(req, res, next);
            }
        })
        .post((req, res, next) => {
            /* Create Planet */
            application.app.controllers.planets.add(req, res, next);
        });
        
    application.route('/planetas/:id')
        .get((req, res, next) => {
            /* Find By Id */
            application.app.controllers.planets.retrieveById(req, res, next);
        })
        .delete((req, res, next) => {
            /* Remove By Id */
            application.app.controllers.planets.delete(req, res, next);
        });
}