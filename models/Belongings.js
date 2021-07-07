const { Schema, model } = require('mongoose');

var Belongings = new Schema({
    name: String,
    barcode: String,
    description: String,
    amount: Number
});

module.exports = model("Belongings", Belongings);