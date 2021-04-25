const accountDB = require('../models/journelEntry');

const createJournal = (journal,res) => {
    accountDB.userJournals(journal,res);
};

module.exports = {
    createJournal
}