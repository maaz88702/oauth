const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.loginPost = async (req, res) => {
  res.status(410).json({ message: 'Use Google login', success: false });
};
