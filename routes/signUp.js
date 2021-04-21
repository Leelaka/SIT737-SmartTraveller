const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const controller = require('../controller/signupController');

router.use(bodyParser.json());

router.post('api/account', (req, res) => {
    let account = req.body;
    console.log(account);
    controller.createAccount(account,res);
});


module.exports = {
    signUp: router }; 