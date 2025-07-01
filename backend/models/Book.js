
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    coverImage: String,
    description: String,
});

module.exports = mongoose.model('Book', bookSchema);
