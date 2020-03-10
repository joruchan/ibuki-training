const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { MongoClient } = require('mongodb');
const jwtExpress = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handlers');
const authenticateUser = require('./helpers/users');

const url = 'mongodb://localhost:27017/';
const app = express();
const port = 5001;

app.use(express.json());
app.use(cors());
app.use(jwtExpress());
app.use(errorHandler);

// POST REQUEST FOR AUTHENTIFICATION
app.post("/authenticate", function(req, res){
  console.log("Authenticating....");
  console.log(req.body);
  authenticateUser.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
})

// POST REQUEST FOR CONTACT FORM
app.post('/send_message', (req, res) => {
  const data = req.body;

  axios
    .get('http://localhost:5001/messages')
    .then((apiRes) => apiRes.data)
    .then((array) => (array[array.length - 1] ? array[array.length - 1].id + 1 : array.length))
    .then((length) => {
      data.id = length;
      MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, dbMongo) => {
        console.log('Connected to the database to add an entry...');
        const dbLibrary = dbMongo.db('ibuki_db');
        dbLibrary.collection('email_requests').insertOne(data, (errorDB, result) => {
          if (errorDB) throw errorDB;
          console.log(`Sucessfully added your entry ${data.contact_name} to the db`);
          res.setHeader('Content-Type', 'text/html');
          res.send('<H1>Record updated</H1>');
          dbMongo.close();
        });
      });
    })
    .catch((error) => error);
});

// POST REQUEST FOR REGISTER FORM
app.post('/register', (req, res) => {
  const data = req.body;

  axios
    .get('http://localhost:5001/bookings')
    .then((apiRes) => apiRes.data)
    .then((array) => (array[array.length - 1] ? array[array.length - 1].id + 1 : array.length))
    .then((length) => {
      data.id = length;
      MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, dbMongo) => {
        console.log('Connected to the database to add an entry...');
        const dbLibrary = dbMongo.db('ibuki_db');
        dbLibrary.collection('registered_customers').insertOne(data, (errorDB, result) => {
          if (errorDB) throw errorDB;
          console.log(`Sucessfully added your entry ${data.register_name} to the db`);
          res.setHeader('Content-Type', 'text/html');
          res.send('<H1>Record updated</H1>');
          dbMongo.close();
        });
      });
    })
    .catch((error) => error);
});

// GET REQUEST WITH PARAMS FOR BOOKINGS
app.get('/bookings', (req, res) => {
  let result;

  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, dbMongo) => {
    console.log('Connected to the database to get the list of entries...');
    const dbLibrary = dbMongo.db('ibuki_db');
    dbLibrary
      .collection('registered_customers')
      .find({})
      .toArray((error, resultDb) => {
        if (error) throw error;
        result = resultDb;
        res.set({ 'Content-type': 'text/json', 'X-Total-Count': resultDb.length, 'Access-Control-Expose-Headers': 'X-Total-Count' });
        res.send(result);
        dbMongo.close();
      });
  });
});

app.get('/bookings/:id', (req, res) => {
  const newId = req.params.id;
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, dbMongo) => {
    const dbLibrary = dbMongo.db('ibuki_db');
    dbLibrary
      .collection('registered_customers')
      .findOne({ id: parseInt(newId, 10) }, (error, resultFind) => {
        if (error) throw error;
        res.setHeader('Content-Type', 'text/json');
        res.send(resultFind);
      });
  });
});

app.put('/bookings/:id', (req, res) => {
  const newId = req.params.id;
  console.log(req.body);
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, dbMongo) => {
    const dbLibrary = dbMongo.db('ibuki_db');
    dbLibrary
      .collection('registered_customers')
      .findOneAndUpdate({ id: parseInt(newId, 10) }, {
        $set: {
          register_name: req.body.register_name,
          register_phone: req.body.register_phone,
          register_email: req.body.register_email,
          register_date: req.body.register_date,
        },
      }, (error, resultFindAndUpdate) => {
        if (error) throw error;
        res.set({ 'Content-type': 'text/json' });
        res.send(resultFindAndUpdate);
      });
  });
});

app.delete('/bookings/:id', (req, res) => {
  const newId = req.params.id;
  console.log(req.body);
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, dbMongo) => {
    const dbLibrary = dbMongo.db('ibuki_db');
    dbLibrary
      .collection('registered_customers')
      .findOneAndDelete({ id: parseInt(newId, 10) }, (error, resultFindAndDelete) => {
        if (error) throw error;
        res.set({ 'Content-type': 'text/json' });
        res.send(resultFindAndDelete);
      });
  });
});


// GET REQUEST WITH PARAMS FOR EMAILS
app.get('/messages', (req, res) => {
  let result;

  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, dbMongo) => {
    console.log('Connected to the database to get the list of entries...');
    const dbLibrary = dbMongo.db('ibuki_db');
    dbLibrary
      .collection('email_requests')
      .find({})
      .toArray((error, resultDb) => {
        if (error) throw error;
        result = resultDb;
        res.set({ 'Content-type': 'text/json', 'X-Total-Count': resultDb.length, 'Access-Control-Expose-Headers': 'X-Total-Count' });
        res.send(result);
        dbMongo.close();
      });
  });
});

app.get('/messages/:id', (req, res) => {
  const newId = req.params.id;
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, dbMongo) => {
    const dbLibrary = dbMongo.db('ibuki_db');
    dbLibrary
      .collection('email_requests')
      .findOne({ id: parseInt(newId, 10) }, (error, resultFind) => {
        if (error) throw error;
        res.setHeader('Content-Type', 'text/json');
        res.send(resultFind);
      });
  });
});

app.put('/messages/:id', (req, res) => {
  const newId = req.params.id;
  console.log(req.body);
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, dbMongo) => {
    const dbLibrary = dbMongo.db('ibuki_db');
    dbLibrary
      .collection('email_requests')
      .findOneAndUpdate({ id: parseInt(newId, 10) }, {
        $set: {
          contact_name: req.body.contact_name,
          contact_email: req.body.contact_email,
          contact_phone: req.body.contact_phone,
          contact_message: req.body.contact_message,
        },
      }, (error, resultFindAndUpdate) => {
        if (error) throw error;
        res.set({ 'Content-type': 'text/json' });
        res.send(resultFindAndUpdate);
      });
  });
});

app.delete('/messages/:id', (req, res) => {
  const newId = req.params.id;
  console.log(req.body);
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, dbMongo) => {
    const dbLibrary = dbMongo.db('ibuki_db');
    dbLibrary
      .collection('email_requests')
      .findOneAndDelete({ id: parseInt(newId, 10) }, (error, resultFindAndDelete) => {
        if (error) throw error;
        res.set({ 'Content-type': 'text/json' });
        res.send(resultFindAndDelete);
      });
  });
});

// start server
app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
