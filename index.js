const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();
const jsonParser = bodyParser.json();
const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace',
});

app.use(jsonParser);

app.listen(config.ES_SERVER_PORT, () => {
  console.log('Elastic search server listening on', config.ES_SERVER_PORT);
});
