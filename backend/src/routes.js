const express = require('express');

const OngController = require('./constrollers/OngController');
const ProfileController = require('./constrollers/ProfileController');
const IncidentController = require('./constrollers/IncidentController');
const SessionController = require('./constrollers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.index);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;