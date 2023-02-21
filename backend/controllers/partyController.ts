import PartyModel from '../models/Party.model';

const checkPartyBudget = (budget, services): boolean => {
  const priceSum = services.reduce((sum, service) => sum + service, 0);
  console.log(priceSum, budget);
  if (priceSum > budget) return true;
  return false;
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
        // services: req.body.services
      };
      // if (partySchema.services && checkPartyBudget(partySchema.budget, partySchema.services)) {
      //   return res.status(406).json({msg: 'Seu orçamento é insufuciente!'});
      // };
      const response = await PartyModel.create(partySchema);
      return res.status(201).json({response, msg: 'Evento festivo gerado!'});
    }
    catch (error) {
      console.log(`ERROR: ${error.message}`);
      return res.status(500).send(error.message);
    }
  }
}

module.exports = partyController;
