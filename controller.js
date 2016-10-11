const client = require('./connection.js');

module.exports = {
  createEvent: (req, res) => {
    client.index({
      index: 'events',
      type: 'event',
      body: {
        eventName: req.body.eventName,
        eventContractAddress: req.body.contractAddress,
        eventCreateDateTime: req.body.createDateTime,
        eventStartDateTime: req.body.startDateTime,
        eventEndDateTime: req.body.endDateTime,
        description: req.body.description,
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        city: req.body.city,
        state: req.body.state,
        zipPostalCode: req.body.zipPostalCode,
        country: req.body.country,
        image: req.body.image,
        price: req.body.price,
        quota: req.body.quota,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
      },
    }).then((result) => {
      console.log('a result was created');
      res.status(200).send(result);
    }).catch((error) => {
      res.status(500).send(error);
    });
  },

  searchEvent: (req, res) => {
    client.search({
      index: 'events',
      type: 'event',
      body: {
        'query': {
          'query_string': {
            'query': '*' + req.query.eventName + '*',
            'fields': [
              'eventName',
              'city',
            ],
          },
        },
      },
    }).then((result) => {
      // the result object stores a key which contains the matching results
      const results = [];
      result.hits.hits.forEach((hit) => {
        const resultObj = {
          eventName: hit._source.eventName,
          eventContractAddress: hit._source.contractAddress,
          eventCreateDateTime: hit._source.eventCreateDateTime,
          eventStartDateTime: hit._source.eventStartDateTime,
          eventEndDateTime: hit._source.eventEndDateTime,
          description: hit._source.description,
          addressLine1: hit._source.addressLine1,
          addressLine2: hit._source.addressLine2,
          city: hit._source.city,
          state: hit._source.state,
          zipPostalCode: hit._source.zipPostalCode,
          country: hit._source.country,
          image: hit._source.image,
          price: hit._source.price,
          quota: hit._source.quota,
        };
        results.push(resultObj);
      });
      res.status(200).send(results);
    }).catch((error, response, status) => {
      res.status(500).send(error);
    });
  },
};
