const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },
    id : { type: String, 
    
        unique: true 
    },

 
    date: { type: Date,
         default: new Date()
    },

    isAdmin: { type: Boolean,
     default: false
    }


});

 const User = mongoose.model('User', userSchema);

exports.User = User;