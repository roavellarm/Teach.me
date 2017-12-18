'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Gender', schema);
console.log('Model de gênero exportado com sucesso!')