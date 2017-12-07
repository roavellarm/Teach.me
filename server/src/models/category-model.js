'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Category', schema);
console.log('Model da categoria exportado com sucesso!')