const PartyModel = require('../models/Party.model');

const checkPartyBudget = (budget, services): boolean => {
  const priceSum = services.reduce((sum, service) => sum + service , 0);
  if (priceSum > budget) return false;
  return true;
};

const partyController = {
  create: async (req, res) => {
    try {
      const partySchema = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        budget: req.body.budget,
        image: req.body.image,
        services: req.body.services
      };
      const response = await PartyModel.create(partySchema);
      if (partySchema.services && checkPartyBudget(partySchema.budget, partySchema.services)) {
        return res.status(406).json({msg: 'Seu orçamento é insufuciente!'});
      };
      res.status.json({response, msg: 'Evento festivo gerado!'});
    }
    catch (error) {
      return console.log(`ERRO: `, error);
    }
  }
}

module.exports = partyController;
