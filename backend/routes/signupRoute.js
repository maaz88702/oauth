const router = require('express').Router();
const { localSignupPost } = require('../controllers/signupController');

router.post('/', localSignupPost);

module.exports = router;