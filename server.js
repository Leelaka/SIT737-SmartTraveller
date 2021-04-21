const express = require('express');
const app = express();
const PORT = 8080 || process.env.PORT;
const Routes = require('./routes');
const mongoDB = require('./models/mongodb');


app.use(express.json({extended:false}));

//routes
app.use('/signup', Routes.signUP.signUp);

//dir
app.use(express.static(__dirname + '/public'));

mongoDB.connectDB();

//port listening in

app.listen(PORT, () =>{
    console.log(`Server started on port ${PORT}`);
});