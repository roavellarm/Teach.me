'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Course', schema);
console.log('Model do curso exportado com sucesso!')