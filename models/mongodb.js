const MongoClient = require('mongodb').MongoClient;

//database link
const url = "mongodb+srv://Smart:Traveller@cluster0.e0dex.mongodb.net/accounts?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser:true, useUnifiedTopology:true});

let accountCollections;

//establish connection
const connectDB = () => {
    client.connect((err, db) =>{
        accountCollections = client.db('accounts').collection('account');
        if(!err) console.log('database connected!!');
    });
};

//create account

const userAccounts = (account,res)=>{
    accountCollections.findOne({username: account.username},function(err,exist){
        if (exist) {
            console.log('Account existing in the database!');
            res.send({result:404});
        }
        else {
            accountCollections.insert(account,(err,result)=>{
                console.log('Congrats, your account has been created!');
                res.send({result:200});
            });
        }
      });
};

//get info
const userInfo = (res) => {
    accountCollections.find().toArray(function(err,result){
        if (err) throw err;
        res.send(result);
    });
};

//verify info received
const verify=(account,res)=>{
    accountCollections.findOne({username: account.username, password: account.password}, function(err,exist){
            if(exist){
                console.log('User exists (success)!');
                res.send({result:200});
            } else{
            console.log('unable to find (failed!)'); 
            res.send({result:404});
            }
        });
};


module.exports = {
    connectDB,
    userAccounts,
    userInfo,
    verify};