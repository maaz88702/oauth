const jwt = require("jsonwebtoken")
const auth = (req, res, next) => {
  try {
    if (!process.env.JWT_SECRET) {
      return res.status(500).json({
        message: "Authentication is not configured",
        success: false
      });
    }

    const authHeader = req.headers.authorization;
    const bearerToken = /^Bearer\s+/i.test(authHeader || "")
      ? authHeader.replace(/^Bearer\s+/i, "").trim()
      : null;
    const token = bearerToken || req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        message: "No token provided. Unauthorized access.",
        success: false
      });
    }

    req.user = jwt.verify(token, process.env.JWT_SECRET);
    req.token = token;
    next();

  } catch (error) {
    return res.status(401).json({
      message: "Token verification failed",
      success: false
    });
  }
};

module.exports = auth;
