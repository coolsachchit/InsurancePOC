const mongoose = require('mongoose');

const InsuranceSchema = mongoose.Schema({
    Aadhar: String,
    Name: String
})

module.exports = mongoose.model('Insurance', InsuranceSchema);
