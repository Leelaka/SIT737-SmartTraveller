const accountDB = require('../models/mongodb');

const createJournal = (journal,res) => {
    accountDB.userJournals(journal,res);
};

module.exports = {
    createJournal
}