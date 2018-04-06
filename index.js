var app = require('./config/server');
const server_port = 8080;
app.listen(server_port, function() {
    console.log('Servidor Online');
});