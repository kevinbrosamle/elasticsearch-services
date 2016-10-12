const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const client = require('./connection.js');
const controller = require('./controller.js');

const app = express();
const jsonParser = bodyParser.json();

app.use(jsonParser);

app.post('/api/events', (req, res) => {
  console.log('ES API EVENTS:', req.body);
  controller.createEvent(req, res);
});

app.get('/api/events', (req, res) => {
  controller.searchEvent(req, res);
});

app.listen(config.ES_SERVER_PORT, () => {
  console.log('Elasticsearch server listening on', config.ES_SERVER_PORT);
});

module.exports = client;
