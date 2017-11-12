'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Teach.me API",
        version: "0.0.1"
    });
});

module.exports = router;
console.log('index-route exportada com sucesso.');