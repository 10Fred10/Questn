const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user.route");
const mission = require("./routes/mission.route");
const reward = require("./routes/reward.route");
const mongoose = require("mongoose");
const passport = require("passport");

// initialize the express server
const app = express();

//connect to the data base
let dev_db_url = require("./config/keys").mongoURI;
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.on("open", function() {
  console.log("MongoDB successfully connected");
});

//allocate a port number
let port = 1234;

//listen to that port

app.listen(port, () => {
  console.log("server is up and running on port " + port);
});

//bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Passport config
require("./config/passport")(passport);
// Passport middleware
app.use(passport.initialize());

// link the /users in url with the user.route
app.use("/users", user);
app.use("/missions", mission);
app.use("/rewards", reward);
