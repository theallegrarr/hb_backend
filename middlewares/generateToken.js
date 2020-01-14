const jwt = require('jsonwebtoken');
require('dotenv').config();

function generateToken(user) {
  const payload = {
    username: user.username,
    password: user.password,
  };
  const options = {
    expiresIn: '1d',
  };
  const result = jwt.sign(
    payload,
    process.env.SECRET,
    options,
  );

  return result;
}

module.exports = generateToken;
