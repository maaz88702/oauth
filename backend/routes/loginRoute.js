const router = require('express').Router();
const { loginPost } = require('../controllers/loginController');
const { googleLogin } = require('../controllers/authController');

router.post('/', loginPost);
router.get('/google', googleLogin);

module.exports = router;