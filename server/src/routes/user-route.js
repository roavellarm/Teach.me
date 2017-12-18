'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller');
const authService = require('../services/auth-service');

router.post('/', controller.post);
router.post('/authenticate', controller.authenticate);
router.post('/refresh-token', authService.authorize, controller.refreshToken);
router.get('/', controller.get);
router.put('/:id', controller.put);
// router.delete('/:id', controller.delete);

module.exports = router;

console.log('Route do usuário exportado com sucesso!')