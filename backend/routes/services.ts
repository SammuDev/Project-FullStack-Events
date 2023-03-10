const routerServices = require('express').Router();
const ofServiceController = require('../controllers/serviceController');

// ROTAS
routerServices.route('/services').post((req, res) => ofServiceController.create(req, res));
routerServices.route('/services').get((req, res) => ofServiceController.getAll(req, res));
routerServices.route('/services/:id').get((req, res) => ofServiceController.getId(req, res));
routerServices.route('/services/:id').put((req, res) => ofServiceController.update(req, res));
routerServices.route('/services/:id').delete((req, res) => ofServiceController.delete(req, res));
// ================

module.exports = routerServices;
