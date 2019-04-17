const express = require ('express');
const bodyParser = require ('body-parser');
const user = require ('./routes/user.route');
const mission = require ('./routes/mission.route');
const reward = require ('./routes/reward.route');
const mongoose = require ('mongoose');

// initialize the express server
const server = express(); 

//connect to the data base
let dev_db_url = require("./config/keys").mongoURI;
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('open', function() {console.log("MongoDB successfully connected")});

//allocate a port number
let port= 1234;

//listen to that port

server.listen(port, ()=> {
    console.log("server is up and running on port " + port);
});


//bodyparser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

// link the /users in url with the user.route
server.use('/users', user);
server.use('/missions', mission);
server.use('/rewards', reward);
