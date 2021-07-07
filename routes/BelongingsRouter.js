const router = require('express').Router();
const { create, deleteBel, getAll } = require('../controllers/BelongingsController');
const Authenticate = require('./Authenticator');

router.get("/belongingsall", getAll);
router.post('/create', Authenticate, create);
router.delete('/delete', deleteBel);

module.exports = router; 