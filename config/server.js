var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(expressValidator());

consign()
    .include('./app/routes')
    .then('./config/db.js')
    .then('./app/models')
    .then('./app/services')
    .then('./app/repositories')
    .then('./app/controllers')
    .into(app);

module.exports = app;