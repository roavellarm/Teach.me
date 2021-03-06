'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.get = async() => {
    const res = await User.find({},
        // '_id','firstName','lastName','birthday','phone','email','userType','gender','adress'
    );
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
                gender: data.gender,
                adress: data.adress,
            }
        });
}

exports.delete = async (id) => {
    await User
        .findByIdAndRemove(id);
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