const routerServices = require('express').Router();

const serviceControllers = require('../controllers/serviceController');

// FUNCTIONS
routerServices.router('/services').post((req, res) => serviceControllers.create(req, res));

module.exports = routerServices;
