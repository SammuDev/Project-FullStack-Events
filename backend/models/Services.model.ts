const mongooseService = require('mongoose');

const SchemaService = mongooseService.Schema;

const serviceSchema = new SchemaService({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const Service = mongooseService.model('Service', serviceSchema);

module.exports = {Service, serviceSchema};
