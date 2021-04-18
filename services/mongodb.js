const mongoose = require('mongoose');

const uri = "mongodb+srv://Smart:Traveller@cluster0.e0dex.mongodb.net/users?retryWrites=true&w=majority";

const connectDB = async()=>{
    await mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true});
    console.log('database connected!');
};

module.exports = connectDB;