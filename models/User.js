const { Schema, model } = require('mongoose');

const User = new Schema({
    username: String,
    password: String,
    inventorytype: String
});

module.exports = model("User", User);