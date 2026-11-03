const router = require('express').Router();
const { loginPost, googleLogin } = require('../controllers/loginController');

router.post('/', loginPost);
router.get('/google', googleLogin);

module.exports = router;