const MongoClient = require('mongodb').MongoClient;

//database link
const url = "mongodb+srv://Smart:Traveller@cluster0.e0dex.mongodb.net/accounts?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser:true, useUnifiedTopology:true});

let journalCollections;

//establish connection
const connectDB = () => {
    client.connect((err, db) =>{
        journalCollections = client.db('accounts').collection('journal');
        if(!err) console.log('journal database connected!!');
    });
};

//post journal entry
const userJournals = (journal,res)=>{
            journalCollections.insert(journal,(err,result)=>{
                console.log('Congrats, your entry has been created!');
                res.send({result:200});
            });
};


module.exports = {
    connectDB,
    userJournals
};