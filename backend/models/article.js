const mongoose = require('mongoose');
const articleSchema = mongoose.Schema(
    {

        title:String,
        content:String,
        date:String,
        category:String,
        img:String
    }
)
const article = mongoose.model('article',articleSchema);

module.exports= article;