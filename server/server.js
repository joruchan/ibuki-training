const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { MongoClient } = require('mongodb');
const nodemailer = require('nodemailer');
const prerender = require('prerender');
const { email } = require('./config.json');
const jwtExpress = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handlers');
const authenticateUser = require('./helpers/users');

const url = 'mongodb://localhost:27017/';
const app = express();
const port = 5001;

app.use(
    require('prerender-node')
        .set('prerenderToken', 'K6PzmDPi1DNRml5l6Q88')
        .blacklisted('^/dashboard-admin')
);

const server = prerender();
server.start();

app.use(cors());

app.use(express.json());
app.use(jwtExpress());
app.use(errorHandler);

const transporter = nodemailer.createTransport({
    service: email.service,
    auth: email.auth
});

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// POST REQUEST FOR AUTHENTIFICATION
app.post('/authenticate', (req, res, next) => {
    authenticateUser
        .authenticate(req.body)
        .then(user =>
            user
                ? res.json(user)
                : res.status(400).json({ message: 'Username or password is incorrect' })
        )
        .catch(err => next(err));
});

// POST REQUEST FOR CONTACT FORM
app.post('/send_message', (req, res) => {
    const data = req.body;
    const mailOptions = {
        from: 'coachyuji@gmail.com', // sender address
        to: 'jordane.frechet@gmail.com', // list of receivers
        subject: 'Nouveau message envoyé via le formulaire de contact', // Subject line
        html: `<p>Bonjour Yuji, 
          <br /><br / ><br /> 
          <strong>Nouveau message de :</strong> 
          ${data.contact_name} 
          <br /> 
          <strong>E-Mail :</strong> 
          ${data.contact_email} 
          <br /> 
          <strong>Téléphone</strong> : 
          ${data.contact_phone} 
          <br /><br /> 
          <strong>Message : </strong>
          <br />
          "${escapeHtml(data.contact_message)}" 
          </p>` // plain text body
    };

    axios
        .get('http://localhost:5001/messages')
        .then(apiRes => apiRes.data)
        .then(array => (array[array.length - 1] ? array[array.length - 1].id + 1 : array.length))
        .then(length => {
            data.id = length;
            MongoClient.connect(
                url,
                { useNewUrlParser: true, useUnifiedTopology: true },
                (err, dbMongo) => {
                    console.log('Connected to the database to add an entry...');
                    const dbLibrary = dbMongo.db('ibuki_db');
                    dbLibrary.collection('email_requests').insertOne(data, (errorDB, result) => {
                        if (errorDB) throw errorDB;
                        console.log(`Sucessfully added your entry ${data.contact_name} to the db`);
                        res.setHeader('Content-Type', 'application/json');
                        res.send(result);
                        dbMongo.close();
                    });
                }
            );
        })
        .catch(error => error)
        .then(() =>
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.log(err);
                }
            })
        );
});

// POST REQUEST FOR REGISTER FORM
app.post('/register', (req, res) => {
    const data = req.body;
    console.log('on est dans register');

    const mailOptions = {
        from: 'coachyuji@gmail.com', // sender address
        to: 'jordane.frechet@gmail.com', // list of receivers
        subject: 'Nouvel enregistrement de disponibilités', // Subject line
        html: `<p>Bonjour Yuji, 
          <br /><br / ><br /> 
          <strong>Nouvel enregistrement de :</strong> 
          ${data.register_name} 
          <br /> 
          <strong>E-Mail :</strong> 
          ${data.register_email} 
          <br /> 
          <strong>Téléphone</strong> : 
          ${data.register_phone} 
          <br /><br /> 
          <strong>Dates enregistrées : </strong>
          <br />
          ${data.register_date.map(date => `${date}<br />`)} 
          </p>`
    };

    axios
        .get('http://localhost:5001/bookings')
        .then(apiRes => apiRes.data)
        .then(array => (array[array.length - 1] ? array[array.length - 1].id + 1 : array.length))
        .then(length => {
            data.id = length;
            MongoClient.connect(
                url,
                { useNewUrlParser: true, useUnifiedTopology: true },
                (err, dbMongo) => {
                    console.log('Connected to the database to add an entry...');
                    const dbLibrary = dbMongo.db('ibuki_db');
                    dbLibrary
                        .collection('registered_customers')
                        .insertOne(data, (errorDB, result) => {
                            if (errorDB) throw errorDB;
                            console.log(
                                `Sucessfully added your entry ${data.register_name} to the db`
                            );
                            res.setHeader('Content-Type', 'application/json');
                            res.send(result);
                            dbMongo.close();
                        });
                }
            );
        })
        .catch(error => console.log(error))
        .then(() =>
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.log(err);
                }
            })
        );
});

// GET REQUEST WITH PARAMS FOR BOOKINGS
app.get('/bookings', (req, res) => {
    let result;
    console.log('on est dans /bookings');
    MongoClient.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err, dbMongo) => {
            console.log('Connected to the database to get the list of entries...');
            const dbLibrary = dbMongo.db('ibuki_db');
            dbLibrary
                .collection('registered_customers')
                .find({})
                .toArray((error, resultDb) => {
                    if (error) throw error;
                    result = resultDb;
                    res.set({
                        'Content-type': 'application/json',
                        'X-Total-Count': resultDb.length,
                        'Access-Control-Expose-Headers': 'X-Total-Count'
                    });
                    res.send(result);
                    dbMongo.close();
                });
        }
    );
});

app.get('/bookings/:id', (req, res) => {
    const newId = req.params.id;
    MongoClient.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err, dbMongo) => {
            const dbLibrary = dbMongo.db('ibuki_db');
            dbLibrary
                .collection('registered_customers')
                .findOne({ id: parseInt(newId, 10) }, (error, resultFind) => {
                    if (error) throw error;
                    res.setHeader('Content-Type', 'application/json');
                    res.send(resultFind);
                });
        }
    );
});

app.put('/bookings/:id', (req, res) => {
    const newId = req.params.id;
    console.log(req.body);
    MongoClient.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err, dbMongo) => {
            const dbLibrary = dbMongo.db('ibuki_db');
            dbLibrary.collection('registered_customers').findOneAndUpdate(
                { id: parseInt(newId, 10) },
                {
                    $set: {
                        register_name: req.body.register_name,
                        register_phone: req.body.register_phone,
                        register_email: req.body.register_email,
                        register_date: req.body.register_date
                    }
                },
                (error, resultFindAndUpdate) => {
                    if (error) throw error;
                    res.set({ 'Content-type': 'text/json' });
                    res.send(resultFindAndUpdate);
                }
            );
        }
    );
});

app.delete('/bookings/:id', (req, res) => {
    const newId = req.params.id;
    console.log(req.body);
    MongoClient.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err, dbMongo) => {
            const dbLibrary = dbMongo.db('ibuki_db');
            dbLibrary
                .collection('registered_customers')
                .findOneAndDelete({ id: parseInt(newId, 10) }, (error, resultFindAndDelete) => {
                    if (error) throw error;
                    res.set({ 'Content-type': 'text/json' });
                    res.send(resultFindAndDelete);
                });
        }
    );
});

// GET REQUEST WITH PARAMS FOR EMAILS

app.get('/messages', (req, res) => {
    let result;

    MongoClient.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err, dbMongo) => {
            console.log('Connected to the database to get the list of entries...');
            const dbLibrary = dbMongo.db('ibuki_db');
            dbLibrary
                .collection('email_requests')
                .find({})
                .toArray((error, resultDb) => {
                    if (error) throw error;
                    result = resultDb;
                    res.set({
                        'Content-type': 'text/json',
                        'X-Total-Count': resultDb.length,
                        'Access-Control-Expose-Headers': 'X-Total-Count'
                    });
                    res.send(result);
                    dbMongo.close();
                });
        }
    );
});

app.get('/messages/:id', (req, res) => {
    const newId = req.params.id;
    MongoClient.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err, dbMongo) => {
            const dbLibrary = dbMongo.db('ibuki_db');
            dbLibrary
                .collection('email_requests')
                .findOne({ id: parseInt(newId, 10) }, (error, resultFind) => {
                    if (error) throw error;
                    res.setHeader('Content-Type', 'text/json');
                    res.send(resultFind);
                });
        }
    );
});

app.put('/messages/:id', (req, res) => {
    const newId = req.params.id;
    console.log(req.body);
    MongoClient.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err, dbMongo) => {
            const dbLibrary = dbMongo.db('ibuki_db');
            dbLibrary.collection('email_requests').findOneAndUpdate(
                { id: parseInt(newId, 10) },
                {
                    $set: {
                        contact_name: req.body.contact_name,
                        contact_email: req.body.contact_email,
                        contact_phone: req.body.contact_phone,
                        contact_message: req.body.contact_message
                    }
                },
                (error, resultFindAndUpdate) => {
                    if (error) throw error;
                    res.set({ 'Content-type': 'text/json' });
                    res.send(resultFindAndUpdate);
                }
            );
        }
    );
});

app.delete('/messages/:id', (req, res) => {
    const newId = req.params.id;
    console.log(req.body);
    MongoClient.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err, dbMongo) => {
            const dbLibrary = dbMongo.db('ibuki_db');
            dbLibrary
                .collection('email_requests')
                .findOneAndDelete({ id: parseInt(newId, 10) }, (error, resultFindAndDelete) => {
                    if (error) throw error;
                    res.set({ 'Content-type': 'text/json' });
                    res.send(resultFindAndDelete);
                });
        }
    );
});

// start server
app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});
