const { User } = require('../models');
const jwt = require('jsonwebtoken');
// const { Unauthorized } = require('http-errors');
require('dotenv').config();
const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    // throw new Unauthorized('Not authorized');
    res.status(401).json({
      status: 'error',
      code: 401,
      message: 'Not authorized',
    });
    return;
  }

  const [bearer, token] = authorization.split(' ');
  if (bearer !== 'Bearer') {
    // throw new Unauthorized('Not authorized');
    res.status(401).json({
      status: 'error',
      code: 401,
      message: 'Not authorized',
    });
    return;
  }

  try {
    const { _id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(_id);
    if (!user.token) {
      // throw new Unauthorized('Not authorized');
      res.status(401).json({
        status: 'error',
        code: 401,
        message: 'Not authorized',
      });
      return;
    }
    req.user = user;
    next();
  } catch (error) {
    // throw new Unauthorized('Not authorized');
    res.status(401).json({
      status: 'error',
      code: 401,
      message: 'Not authorized',
    });
  }
};

module.exports = authenticate;