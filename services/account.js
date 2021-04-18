const mongoose = require('mongoose');

const user = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    DOB:{
        type:Date
    },
    country:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
});

module.exports = account = mongoose.model('user', user);