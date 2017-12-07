'use strict';
const mongoose = require('mongoose');
const Category = mongoose.model('Category');

exports.get = async () => {
    const res = await Category.find({
        // active: true
    }, 'title');
    return res;
}

exports.getBySlug = async (slug) => {
    const res = await Category
        .findOne({
            // active: true
        }, 'title');
    return res;
}

exports.getById = async (id) => {
    const res = await Category
        .findById(id);
    return res;
}

exports.getByTag = async (tag) => {
    const res = Category
        .find({
            // active: true
        }, 'title');
    return res;
}

exports.create = async (data) => {
    var category = new Category(data);
    await category.save();
}

exports.update = async (id, data) => {
    await Category
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
            }
        });
}

exports.delete = async (id) => {
    await Category
        .findOneAndRemove(id);
}