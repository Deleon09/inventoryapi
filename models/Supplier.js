const { Schema, model } = require('mongoose');

var Supplier = new Schema({
    name: String,
    mail: String,
    phone: String,
    cif: Number,
    Bdetails: String,
    location: String,
    notes: String,
    userId: {
        type: String,
        required: true
    }
});

module.exports =  model("Supplier", Supplier);