const router = require('express').Router();
const { create, deleteS, getAll } = require('../controllers/SupplierController');
const Authenticate = require('./Authenticator');

router.get("/", getAll);
router.post('/create', Authenticate, create);
router.delete('/delete', deleteS);

module.exports = router; 