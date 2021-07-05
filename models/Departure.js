const { Schema, model } = require('mongoose');

var Departure = new Schema({
    clientName: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    productId: {
        type: [String],
        required: true
    },
    request: String,
    Observations: String,
    userId: {
        type: String,
        required: true
    }
});

module.exports = model("Departure", Departure);