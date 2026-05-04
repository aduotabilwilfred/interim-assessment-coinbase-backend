const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  try {
    // Check for token in cookies or Authorization header
    let token = req.cookies.token;
    
    if (!token && req.header('Authorization')) {
      const authHeader = req.header('Authorization');
      if (authHeader.startsWith('Bearer ')) {
        token = authHeader.replace('Bearer ', '');
      }
    }

    if (!token) {
      return res.status(401).json({ message: 'Authentication failed. No token provided.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed. Invalid token.' });
  }
};

module.exports = auth;
