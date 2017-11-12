'use strict';

// Requisições de módulos
const app = require('../src/app');
const http = require('http');

// Define porta
const port = process.env.port || 3000;
app.set(`${port}`);

// Cria o servidor 
const server = http.createServer(app);

server.listen(port);
console.log(`Servidor rodando na porta ${port}`);
