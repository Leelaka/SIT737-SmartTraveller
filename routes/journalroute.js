const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const controller = require('../controller/journalController');

app.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())
app.use(router);

router.post('/api/journal', (req, res) => {
    let journal = req.body;
    console.log(journal);
    controller.createJournal(journal,res);
});


module.exports = {
    journalroute: router }; 