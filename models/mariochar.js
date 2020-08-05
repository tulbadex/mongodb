const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema and Model
const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

// mariochar will be the collection name in the database
const MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;