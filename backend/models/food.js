const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },

    uid : {
        type: String,
        required: true,
        unique: true
    }


});

const Food = mongoose.model('food', foodSchema);

exports.Food = Food;

