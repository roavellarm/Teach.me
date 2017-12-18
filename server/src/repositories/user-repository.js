'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.get = async() => {
    const res = await User.find({
        // active: true
    });
    return res;
}

exports.create = async(data) => {
    var user = new User(data);
    await user.save();
}

exports.update = async (id, data) => {
    await User
        .findByIdAndUpdate(id, {
            $set: {
                firstName: data.firstName,
                lastName: data.lastName,
                birthday: data.birthday,
                phone: data.phone,
                email: data.email,
                userType: data.userType,
                userTypeString: data.userTypeString,
                gender_id: data.gender_id,
                adress: data.adress,
            }
        });
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