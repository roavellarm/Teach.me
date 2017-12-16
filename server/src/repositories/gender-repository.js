'use strict';
const mongoose = require('mongoose');
const Gender = mongoose.model('Gender');

exports.get = async () => {
    const res = await Gender.find({
        // active: true
    }, 'title');
    return res;
}

exports.getById = async (id) => {
    const res = await Gender
        .findById(id);
    return res;
}

exports.create = async (data) => {
    var gender = new Gender(data);
    await gender.save();
}

exports.update = async (id, data) => {
    await Gender
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
            }
        });
}

exports.delete = async (id) => {
    await Gender
        .findOneAndRemove(id);
}