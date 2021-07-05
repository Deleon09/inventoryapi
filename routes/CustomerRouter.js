const router = require('express').Router();
const { create, deleteCus, getAll } = require('../controllers/CustomerController');
const Authenticate = require('./Authenticator');

router.get("/productall", getAll);
router.post('/create', Authenticate, create);
router.delete('/delete', deleteCus);

module.exports = router; 