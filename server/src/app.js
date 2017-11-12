'use strict';

/**
 * Requisições de módulos
 * Express: framework 
 * body-parser: conversor de json
 * Mongoose: ORM - object relationship manager
 */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config');
// Inicializa o Express
const app = express();
// Define o construtor de rotas do express
const router = express.Router();


// Carrega as rotas
const indexRoute = require('./routes/index-route');


// Conecta ao banco
// mongoose.connect(config.connectionString);

// Configura o bodyParser para que casa requisição ao servidor passe por ele
app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

// Habilita e define os CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});


// Utiliza as definições de rotas
app.use('/', indexRoute);

module.exports = app;
console.log('app exportado com sucesso!');