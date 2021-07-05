const { Schema, model } = require('mongoose');

var Product = new Schema({
    name: String,
    quantity: Number,
    supplierId: {
        type: String,
        required: true
    },
    price: Number,
    imageUrl: String,
    userId: {
        type: String,
        required: true
    }
});

module.exports = model("Product", Product);