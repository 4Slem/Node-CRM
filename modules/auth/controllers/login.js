const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../../config');
const User = require('../models');

module.exports = async (req, res) => {
  const candidate = await User.findOne({email: req.body.email});

  if (candidate) {
    const passwordResult = bcrypt.compareSync(req.body.password, candidate.password);
    if (passwordResult) {
      const token = jwt.sign({
        email: candidate.email,
        userId: candidate._id,
      }, keys.jwt, { expiresIn: 60 * 60 });

      res.status(200).json({
        token: `Bearer ${token}`,
        email: candidate.email,
      });
    } else {
      res.status(401).json({
        message: 'Error',
      });
    }
  } else {
    res.status(404).json({
      message: 'Error',
    });
  }
};