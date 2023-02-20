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
      const response = await serviceModel(service);
      res.status(201).json({response, msg: 'Serviço criado com sucesso!'});
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  }
};

module.exports = serviceController;
