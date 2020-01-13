const express = require('express');

const Hubs = require('./data/hubs-model.js');

const server = express();

// middleware
server.use(express.json()); // needed to parse JSON

// routes or endpoints

// GET to "/"
server.get('/', function(request, response) {
    response.send({ hello: 'Web 25!' });
  });

// see a list of Hubs
server.get('/api/hubs', (request, response) => {
    // read the data from the database (Hubs)
    Hubs.find() // return a promise
        .then(hubs => {
            console.log('Hubs', hubs);
            response.status(200).json(hubs);
        })
        .catch(error => {
            console.log(error);
            // handle the error
            response.status(500).json({ errorMessage: "sorry, we ran into an error getting the list of Hubs"})
        })
})

// create a Hub
server.post('/api/hubs', (request, response) => {
    const hubData = request.body; // for this to work you need the server.use(express.json()); above

    // never trust the client, validate the data. for now we trust the data for the demo
    Hubs.add(hubData)
        .then(hub => {
            response.status(201).json(hub);
        })
        .catch(error => {
            console.log(error);
            // handle the error
            response.status(500).json({ errorMessage: "sorry, we ran into an error creating the hub"})
        });

})

// delete a Hub
server.delete('/api/hubs/:id', (request, response) => {
    const id = request.params.id;

    Hubs.remove(id)
        .then(deleted => {
            // response.status(204).end;
            response.status(204).json(deleted);
        })
        .catch(error => {
        console.log(error);
        // handle the error
            response.status(500).json({ errorMessage: "sorry, we ran into an error removing the hub"})
        });
});



// update a Hub : extra exercise
server.put('/api/hubs/:id', (request, response) => {
    const id = request.params.id;
    
    const hubData = request.body;
    Hubs.update(id, hubData)
    .then(updated => {
       response.status(204).json(updated)
    })
    .catch(error => {
        console.log(error);
        //handle the error
        response.status(500).json({errorMessage: 'Sorry, we ran into an error updating the hub.'})
    })
})


const port = 8000;

server.listen(port, () => console.log(`\n ** api on port: ${port} ** \n`));