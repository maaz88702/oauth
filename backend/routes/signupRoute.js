const router = require('express').Router();
const {localSignupPost}=require('../controllers/authController')


router.post('/', localSignupPost);

module.exports = router;