const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    mobile:Number,
    address:String
})

module.exports = mongoose.model('user',studentSchema)
