const routerServices = require('express').Router();

const ofServiceController = require('../controllers/serviceController');

// FUNCTIONS

routerServices.route('/services').post((req, res) => ofServiceController.create(req, res));
// routerServices.post('/services', (req, res) => ofServiceController.create(req, res));

module.exports = routerServices;
