const { Service: serviceModel } = require('../models/services');

const serviceController = {
  create: async (req, res) => {
    try {
      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      }
      return await res.status(200).send('TEXTO');
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  }
};

module.exports = serviceController;
