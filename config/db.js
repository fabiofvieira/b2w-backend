const mongoose = require('mongoose');
const config = require('../db_config');

const conn = function() {
    console.log('DB_CONFIG', config.db);
    mongoose.connect(config.db);
    mongoose.connection.on('connected', () => console.log('Mongoose ON'));
    mongoose.connection.on('error', (err) => console.log('Mongoose Error: ' + err));
    mongoose.connection.on('disconnected', (err) => console.log('Mongoose disconnected'));
    process.on('SIGINT', () => {
        mongoose.connection.close(() => { console.log('Mongoose closed'); process.exit(0); } );
    });
    return mongoose;
}

module.exports = conn;