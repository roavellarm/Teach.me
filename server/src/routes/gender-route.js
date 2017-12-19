'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/gender-controller');

router.post('/', controller.post);
router.put('/:id', controller.put);
router.get('/', controller.get);
router.get('/:id', controller.getById);
router.delete('/:id', controller.delete);

module.exports = router;

console.log('Route de gênero exportado com sucesso!')