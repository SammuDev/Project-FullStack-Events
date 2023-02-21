const mongooseParty = require('mongoose');

const SchemaParty = mongooseParty.Schema;

const { toServiceSchema } = require('./Services.model');

const partySchema = new SchemaParty({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  budget: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  services: {
    type: [ toServiceSchema ]
  }
}, {timestamps: true});

const Party = mongooseParty.model('Party', partySchema);

module.exports = Party;
