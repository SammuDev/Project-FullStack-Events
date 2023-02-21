const PartyModel = require('../controllers/../controllers/../models/Party.model');

const partyController = {
  create: async (req, res) => {
    try {
      const partySchema = {
        name: req.body.name,
        author: req.body.author,
        description: req.body.description,
        budget: req.body.budget,
        image: req.body.image,
        services: req.body.services
      };
      const response = await PartyModel.create(partySchema);
      return res.status(201).json({response});
    }
    catch (error) {
      return console.log(`ERRO: `, error);
    }
  }
}

module.exports = partyController;
