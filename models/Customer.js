const { Schema, model } = require('mongoose');

var Customer = new Schema({
    name: String,
    mail: String,
    phone: String,
    Bdetails: String,
    location: String,
    notes: String,
    userId: {
        type: String,
        required: true
    }
});

module.exports = model("Customer", Customer);