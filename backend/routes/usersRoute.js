const router = require('express').Router();
const { getUsers } = require('../controllers/usersController');
const auth = require('../middlewares/auth');

router.get('/',auth, getUsers);
module.exports = router;