const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: [
    'error', 'trace',
  ],
});

// uncomment and run server to create index
// client.indices.create({
//   index: 'events',
// }).then((response, status) => {
//   console.log('create', response);
// }).catch((error) => {
//   console.log(error);
// });

// uncomment and run server to delete the index
// client.delete({
//   index: 'events',
//   type: 'event',
// }).then((response, status) => {
//   console.log(response);
// }).catch((error) => {
//   console.log(error);
// });

module.exports = client;
