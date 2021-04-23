const express = require('express');
const app = express();
const PORT = 8080 || process.env.PORT;
const Routes = require('./routes');
const mongoDB = require('./models/mongodb');

//dir
app.use(express.static(__dirname + '/public'));

//routes
app.use('/signup', Routes.signUP.signuproute);
app.use('/login', Routes.logIn.loginroute);

mongoDB.connectDB();

//port listening in

app.listen(PORT, () =>{
    console.log(`Server started on port ${PORT}`);
});