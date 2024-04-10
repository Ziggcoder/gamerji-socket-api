const mongoose = require("mongoose")
const Schema = mongoose.Schema


const User = mongoose.model("User", new mongoose.Schema(
    {
        userName: {
            type: String,
        },
        userId: {
            type: String,
        },
        lastBid:{
            type:Number,
        },
        bids:{
            type: Schema.Types.Mixed,
        }

    })
);

module.exports = User;