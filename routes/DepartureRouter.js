const router = require('express').Router();
const { create, deleteDep } = require('../controllers/DepartureController');
const Authenticate = require('./Authenticator');

router.post('/create', Authenticate, create);
router.post('/delete', deleteDep);

module.exports = router; 