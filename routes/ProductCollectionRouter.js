const router = require('express').Router();
const { create, updateCollection } = require('../controllers/ProductCollectionController');
const Authenticate = require('./Authenticator');

router.post('/create', Authenticate, create);
router.post('/updateArray', updateCollection);


module.exports = router; 