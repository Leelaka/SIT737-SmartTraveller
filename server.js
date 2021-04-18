const express = require('express');
const connectDB = require('./services/mongodb');
const app = express();

connectDB();
app.use(express.static(__dirname + '/public'));

app.listen(8080, () =>{
    console.log('Server started on port 8080');
});