const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: [
    'error', 'trace',
  ],
});

// Only needed for creation of index
// client.indices.create({
//   index: 'events',
// }, (error, response, status) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('create', response);
//   }
// });

module.exports = client;
