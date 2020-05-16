const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    address: String,
    mobile_no: { type: Number, required: true },
	age: { type: Number, min: 18, max: 65, required: true }
});

module.exports = mongoose.model('Customer', CustomerSchema);
