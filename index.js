const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();
const jsonParser = bodyParser.json();

// const allowCrossDomain = (req, res, next) => { // enable CORS
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//   res.header('Access-Control-Max-Age', 10);
//   // intercept OPTIONS method
//   if (req.method === 'OPTIONS') {
//     res.sendStatus(200);
//   } else {
//     next();
//   }
// };
// app.use(allowCrossDomain);

app.use(jsonParser);

app.listen(config.ES_SERVER_PORT, () => {
  console.log('Elastic search server listening on', config.ES_SERVER_PORT);
});
