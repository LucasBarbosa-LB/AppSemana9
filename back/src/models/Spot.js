const mongoose = require('mongoose');

const SpotShema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    prince: Number,
    techs: [String],
    user:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    
});

module.exports =  mongoose.model('Spot', SpotShema);