

<!-- [ client ] send a request -- > [ Server (API) ]

[ server ] - send a response -- > [ Client ] -->

<!-- //in terminal inside folder// -->

npm i sqlite3 - for errors in termi nal


1. npm i
2. npm i express 
3. npm run server

<!-- //import express from 'express'; // ES2015 module syntax// -->
4. const express = require("express"); //CommonJS modules//

const Hubs = require('./data/hubs-model.js'); // our Hubs database library

5. const server = express();

<!-- //router or endpoints -->

<!-- // GET TO "/" -->
6. server.get('/', function(request, response) {
  response.send({ hello: 'Web 25!' });
});

// see a list of Hubs

// create a Hub

// delete a Hub

// update a Hub


7. const port = 8000;

8. server.listen(port, () => console.log(`\n ** api on port: ${port} ** \n`));


////////////////////////////////////////////////////////
// import express from 'express'; // ES2015 module syntax
const express = require('express'); // CommonJS modules
const server = express();
// routes or endpoints
// GET to "/"
server.get('/', function(request, response) {
  response.send({ hello: 'Web 25!' });
});
const port = 8000;
server.listen(port, () => console.log(`\n ** api on port: ${port} ** \n`));
// type: npm i express to install the express library
// to run the server type: npm run server

