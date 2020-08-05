const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema and Model
const BookSchema = new Schema({
    title: String,
    pages: Number
});

const AuthorSchema = new Schema({
    name: String,
    age: Number,
    books: [BookSchema]
});

// mariochar will be the collection name in the database
const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;