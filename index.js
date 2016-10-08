const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const client = require('./connection.js');

const app = express();
const jsonParser = bodyParser.json();

app.use(jsonParser);

client.ping({
  requestTimeout: 30000,

  // undocumented params are appended to the query string
  hello: 'elasticsearch',
}, function (error) {
  if (error) {
    console.error('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});

app.listen(config.ES_SERVER_PORT, () => {
  console.log('Elastic search server listening on', config.ES_SERVER_PORT);
});

module.exports = client;
