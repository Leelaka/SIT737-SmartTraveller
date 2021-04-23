const accountDB = require('../models/mongodb');

const createAccount=(account,res) => {
    accountDB.userAccounts(account,res);
}

module.exports ={
    createAccount
}