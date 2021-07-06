const { Schema, model } = require('mongoose');

var Product = new Schema({
    name: String,
    quantity: Number,
    supplierId: {
        type: String,
    },
    price: Number,
    imageUrl: String,
    userId: {
        type: String,
    }
});

module.exports = model("Product", Product);