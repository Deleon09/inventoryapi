const router = require('express').Router();
const { create, updateCollection, getAll } = require('../controllers/ProductCollectionController');
const Authenticate = require('./Authenticator');

router.get('/', getAll);
router.post('/create', Authenticate, create);
router.post('/updateArray', updateCollection);


module.exports = router; 