const accountDB = require('../models/mongodb');

const verifyAccount = (account,res) => {
    accountDB.verify(account,res);
};

module.exports = {
    verifyAccount
}