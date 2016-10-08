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
      },
    }).then((result) => {
      console.log('a result was created');
      res.status(200).send(result);
    }).catch((error) => {
      res.status(500).send(error);
    });
  },

  // searchEvent: (req, res) => {
  //
  // },
};
