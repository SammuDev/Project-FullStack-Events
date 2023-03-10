import ServiceModel from '../models/Services.model';

const serviceController = {
  create: async (req, res) => {
    try {
      const serviceSchema = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };
      const response = await ServiceModel.create(serviceSchema);
      return res.status(201).json({response, msg: 'Serviço criado com sucesso!'});
    }
    catch (error) {
      console.log(`ERROR: ${error.message}`);
      return res.status(500).send(error.message);
    }
  },

  getAll: async (req, res) => {
    try {
      const services = await ServiceModel.find();
      return res.status(200).json(services);
    }
    catch (error) {
      console.log(`ERROR: ${error.message}`);
      return res.status(500).send(error.message);
    }
  },

  getId: async (req, res) => {
    try {
      const id = req.params.id;
      const services = await ServiceModel.findById(id);
      if (!services) return res.status(404).json({msg: 'ERRO: Serviço solicitado não encontrado!'});
      return res.status(200).json(services);
    }
    catch (error) {
      console.log(`ERROR: ${error.message}`);
      return res.status(500).send(error.message);
    }
  },

  update: async (req, res) => {
    try {
      const serviceSchema = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };
      const id = req.params.id;
      const services = await ServiceModel.findByIdAndUpdate(id, serviceSchema, { new: true });
      if (!services) return res.status(404).json({msg: 'ERRO: Serviço solicitado não encontrado!'});
      return res.status(200).json({ services, msg: 'Serviço atualizado com sucesso!' });
    }
    catch (error) {
      console.log(`ERROR: ${error.message}`);
      return res.status(500).send(error.message);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const services = await ServiceModel.findByIdAndDelete(id);
      if (!services) return res.status(404).json({msg: 'ERRO: Serviço solicitado não encontrado!'});
      return res.status(200).json({ services, msg: `Serviço de ID:${services.id} excluído com sucesso!` });
    }
    catch (error) {
      console.log(`ERROR: ${error.message}`);
      return res.status(500).send(error.message);
    }
  }
};

module.exports = serviceController;
