const mongoose = require('mongoose');

const InsuranceSchema = mongoose.Schema({
    Aadhar: String,
    Name : String
}, {
    timestamps: true
});

module.exports = mongoose.model('Insurance', InsuranceSchema);
