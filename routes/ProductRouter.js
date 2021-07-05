const router = require('express').Router();
const { create, deletePro, getAll, updatePro } = require('../controllers/ProductController');
const Authenticate = require('./Authenticator');

router.get("/", getAll);
router.post('/createproduct', Authenticate, create);
router.delete('/deleteproduct', deletePro);
router.post('/updateproduct', updatePro);

module.exports = router; 