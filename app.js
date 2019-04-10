const express = require ('express');
const bodyParser = require ('body-parser');

// initialize the express app
const app = express();

//allocate a port number
let port= 1234;

//listen to that port

app.listen(port, ()=> {
    console.log("server is up and running on port " + port);
});