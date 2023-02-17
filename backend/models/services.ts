const mongooseSvc = require('mongoose');

const { Schema } = mongooseSvc;

const serviceSchema = new Schema({
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

module.exports = serviceSchema;
