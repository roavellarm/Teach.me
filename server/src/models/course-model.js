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
    
    // instructor: {
    //     type: User,
    // },
    // student: {
    //     type: User,
    // },
    // category: {
    //     type: Category,
    // },
    instructor_id: {
        type: String,
    },
    student_id: {
        type: String,
    },
    category_id: {
        type: String,
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