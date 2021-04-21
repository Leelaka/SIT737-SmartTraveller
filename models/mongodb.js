const MongoClient = require('mongodb').MongoClient;

//database link
const url = "mongodb+srv://Smart:Traveller@cluster0.e0dex.mongodb.net/users?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser:true, useUnifiedTopology:true});

let accountCollections;

//establish connection
const connectDB = () => {
    client.connect((err, database) =>{
        accountCollections = client.db('accounts').collection('account');
        if(!err) console.log('database connected!!');
    });
};

//create account
const userAccounts = (account, res) => {
    accountCollections.findOne({
        email: account.email
    }, function(err, exist){
        if(!exist){
            accountCollections.insert(account,(err,result) => {
                console.log('Account has been created!');
                res.send({result:200});
            });
        }else{console.log('Existing account found, fail to create an account!'); 
        res.send({result:404})};
    });
}

module.exports = {
    connectDB,
    userAccounts};