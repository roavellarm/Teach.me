'use strict';
const mongoose = require('mongoose');
const Course = mongoose.model('Course');

exports.get = async () => {
    const res = await Course.find({
        // active: true
    });
    return res;
}

exports.getById = async (id) => {
    const res = await Course
        .findById(id);
    return res;
}

exports.create = async (data) => {
    var course = new Course(data);
    await course.save();
}

exports.update = async (id, data) => {
    await Course
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
            }
        });
}

exports.delete = async (id) => {
    await Course
        .findByIdAndRemove(id);
}