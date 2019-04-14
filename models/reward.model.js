const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let rewardSchema = new Schema (
    {
        title :    {type: String, required: true},
        location :    {type: String, required: false},
        description :    {type: String, required: true},
        endingDate :    {type: Date, required: false},
        pictures :    {type: [String], required: false},
        limit : {type : Number, required : true},
        price : {type : String, required: true}
    }
);

module.exports = mongoose.model('Reward', rewardSchema, 'Rewards');