const routerParties = require('express').Router();
const ofPartyController = require('../controllers/partyController');

// ROTAS
routerParties.route('/parties').post((req, res) => ofPartyController.create(req, res));
// ================

module.exports = routerParties;
