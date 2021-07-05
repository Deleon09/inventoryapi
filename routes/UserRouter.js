const router = require('express').Router();
const { create, login, getUser } = require('../controllers/UserController');

router.post('/login', login);
router.post('/create', create);
router.get('/getUser', getUser);

module.exports = router;