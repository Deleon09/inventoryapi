const { Schema, model } = require('mongoose');

var ProductCollection = new Schema({
    name: String,
    productId: {
        type: [String],
        required: true
    },
    userId: {
        type: String,
        required: true
    }
});

module.exports = model("ProductCollection", ProductCollection);