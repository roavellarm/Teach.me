'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.create = async(data) => {
    var customer = new User(data);
    await customer.save();
}

exports.authenticate = async(data) => {
    const res = await User.findOne({
        email: data.email,
        password: data.password
    });
    return res;
}

exports.getById = async(id) => {
    const res = await User.findById(id);
    return res;
}

console.log('Repositório do usuário exportado com sucesso!')