
const elasticsearch = require('elasticsearch');
const config = require('./config');

let client = {
  ping: function(){},
  index: function(){},
  search: function(){},
};

const tryConnect = () => {
  client = new elasticsearch.Client({
    host: `${process.env.ES_URL || config.SERVER_URL}:${config.ES_PORT}`,
    // host: '172.12.0.1:9200',
  });

  client.ping({
    requestTimeout: 30000,
    // undocumented params are appended to the query string
    hello: 'elasticsearch',
  }, (error) => {
    if (error) {
      console.error('elasticsearch cluster is down! Trying again in 10 seconds.');
      setTimeout(tryConnect, 10000);
    } else {
      // uncomment and run server to create index
      client.indices.create({
        index: 'events',
      }).then((response) => {
        console.log('create', response);
      }).catch((error) => {
        console.log(error);
      });
      console.log('All is well');
    }
  });

};

tryConnect();

// uncomment and run server to delete the index
// client.indices.delete({
//   index: 'events',
// }).then((response, status) => {
//   console.log('the events index has been deleted');
//   console.log(response);
// }).catch((error) => {
//   console.log(error);
// });

module.exports = client;
