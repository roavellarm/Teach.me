'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const User = mongoose.model('User');
// const Category = mongoose.model('Category');

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    instructor: {
        type: JSON,
    },
    student: {
        type: JSON,
    },
    category: {
        type: JSON,
    },
    location: {
        type: String,
        required: true
    },    
    contact: {
        type: String,
    },    
    description: {
        type: String,
    },    
    model: { // true = presencial / false = distancia
        type: Boolean,
    },    
    price: {
        type: Number,
    },
});

module.exports = mongoose.model('Course', schema);
console.log('Model do curso exportado com sucesso!')