const mongoose = require('mongoose');

const SellingDetailsSchema = mongoose.Schema({
    selling_date: String,
    volume: String,
    rate: String,
    sold_to: String,
    remarks: String,
    sales_incharge: String
});

module.exports = mongoose.model('SellingDetails', SellingDetailsSchema);