const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/';

// variables
const app = express();
const port = 5001;

// middlewares
app.use(express.json());
app.use(cors());

// server config
// POST REQUEST WITH JSON BODY
app.post('/users', (req, res) => {

});

// GET REQUEST WITH PARAMS
app.get('/users', (req, res) => {
  let result;

  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, dbMongo) => {
    console.log('Connected to the database ...');
    const dbZip = dbMongo.db('ibuki_db');
    dbZip
      .collection('registered_customers')
      .find({})
      .toArray((err, resultDb) => {
        if (err) throw err;
        result = resultDb;
        res.setHeader('Content-type', 'text/json');
        res.send(result);
        dbMongo.close();
      });
  });
});


// start server
app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
