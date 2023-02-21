const routerParties = require('express').Router();
const ofPartyController = require('../controllers/partyController');

// ROTAS
routerParties.route('/parties').post((req, res) => ofPartyController.create(req, res));
routerParties.route('/parties').get((req, res) => ofPartyController.getAll(req, res));
routerParties.route('/parties/:id').delete((req, res) => ofPartyController.delete(req, res));
// ================

module.exports = routerParties;
