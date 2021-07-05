const router = require('express').Router();
const { create } = require('../controllers/DepartureController');
const Authenticate = require('./Authenticator');

router.post('/create', Authenticate, create);

module.exports = router; 