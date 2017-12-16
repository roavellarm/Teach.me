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

// Importa as configurações
const config = require('./config');
// Inicializa o Express
const app = express();
// Define o construtor de rotas do express
const router = express.Router();

// Carrega as models
const userModel = require('./models/user-model');
const genderModel = require('./models/gender-model');
const categoryModel = require('./models/category-model');
const courseModel = require('./models/course-model');

// Carrega as rotas
const indexRoute = require('./routes/index-route');
const userRoute = require('./routes/user-route');
const genderRoute = require('./routes/gender-route');
const categoryRoute = require('./routes/category-route');
const courseRoute = require('./routes/course-route');

// Conecta ao banco
mongoose.connect(config.connectionString);

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
app.use('/user', userRoute);
app.use('/gender', genderRoute);
app.use('/category', categoryRoute);
app.use('/course', courseRoute);

module.exports = app;
console.log('app exportado com sucesso!');