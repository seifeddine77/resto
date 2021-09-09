const mongoose = require('mongoose');
const weatherSchema = mongoose.Schema({


    name:String,
    speciality:String,
    note:Number
})
const weather = mongoose.model('Weather', weatherSchema);
module.exports= weather;