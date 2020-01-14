const router = require('express').Router();
const generateToken = require('../middlewares/generateToken');

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (password && username) {
    const token = generateToken({
      username,
      password,
    });

    res.status(200).json({
      message: `Welcome ${username}!`,
      token,
    });
  } else {
    res.status(401).json({ message: 'Invalid Credentials' });
  }
});

module.exports = router;
