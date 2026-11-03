const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: (process.env.CLIENT_URL || 'http://localhost:3000') + '/login?error=google' }),
  (req, res) => {
    try {
      const token = jwt.sign(
        { id: req.user._id, email: req.user.email },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );

      res.cookie('token', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000
      });

      const clientUrl = process.env.CLIENT_URL || 'http://localhost:3000';
      res.redirect(clientUrl);
    } catch (err) {
      const clientUrl = process.env.CLIENT_URL || 'http://localhost:3000';
      res.redirect(clientUrl + '/login?error=token');
    }
  }
);

module.exports = router;
