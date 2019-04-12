const express = require ('express');
const bodyParser = require ('body-parser');
const user = require ('./routes/user.route');
const mission = require ('./routes/mission.route');
const mongoose = require ('mongoose');

// initialize the express app
const app = express();

//connect to the data base
let dev_db_url = 'mongodb+srv://fred:Questn1994@questn-oe0yo.mongodb.net/QuestnDB?retryWrites=true';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//allocate a port number
let port= 1234;

//listen to that port

app.listen(port, ()=> {
    console.log("server is up and running on port " + port);
});


//bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// link the /users in url with the user.route
app.use('/users', user);
app.use('/missions', mission);
