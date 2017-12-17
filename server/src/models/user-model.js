'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    // id: {                NAO PRECISARIA COLOCAR ID NO SCHEMA????
    //     type: Number,
    //     required: false
    // },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    phone: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    },
    userType: {     // true = student; false = instructor
        type: Boolean,
        required: true,
    },
    userTypeString: { // true = student; false = instructor
        type: String,
        required: true,
    },
    // active: {
    //     type: Boolean,
    //     required: true,
    //     default: true
    // },
    gender_id: {
        type: Number,
        required: true,
    },
    adress: {
        type: String,
        required: true,
    }
    // roles: [{
    //     type: String,
    //     required: true,
    //     enum: ['admin', 'student', 'instructor']
    // }]
});

module.exports = mongoose.model('User', schema);
console.log('Model do usuário exportado com sucesso!')