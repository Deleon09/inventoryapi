const router = require('express').Router();
const { create, deleteProC, updateCollection, getAll } = require('../controllers/ProductCollectionController');
const Authenticate = require('./Authenticator');

router.get('/', getAll);
router.post('/create', Authenticate, create);
router.delete('/delete', deleteProC);
router.post('/updateArray', updateCollection);


module.exports = router; 