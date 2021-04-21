
const connectDB = require('../models/mongodb');

const createAccount=(account,res) => {
    connectDB.insertAccount(account,res)
}

module.exports ={
    createAccount
}