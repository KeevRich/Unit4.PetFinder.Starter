// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const PORT = 8080;

// GET - / - returns homepage
app.get('/api/v1/pets', async (req, res) => {
    try {
      const { rows } = await pool.query('SELECT * FROM pets');
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response

});

// get pet by owner with query string
app.get('/api/v1/pets/owner', async (req, res) => {
    const ownerName = req.query.owner;
    try {
      const { rows } = await pool.query('SELECT * FROM pets WHERE owner_name = $1', [ownerName]);
      if (rows.length === 0) {
        res.status(404).send('Pet not found');
      } else {
        res.json(rows);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
    // get the owner from the request


    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === owner);

    // send the pet as a response

});

// get pet by name
// GET pet by name
app.get('/api/v1/pets/:name', async (req, res) => {
    const petName = req.params.name;
    try {
      const { rows } = await pool.query('SELECT * FROM pets WHERE name = $1', [petName]);
      if (rows.length === 0) {
        res.status(404).send('Pet not found');
      } else {
        res.json(rows[0]);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
    // get the name from the request


    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);

    // send the pet as a response

    // Serve a static index.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;