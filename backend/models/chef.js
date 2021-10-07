const mongoose = require('mongoose');
const chefSchema = mongoose.Schema({


    name:String,
    speciality:String,
    note:Number,
    img:String
})
const chef = mongoose.model('chef', chefSchema);
module.exports= chef;