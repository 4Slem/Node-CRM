const bcrypt = require('bcryptjs');
const errorHandler = require('../../../utils/errorHandler');
const User = require('../models');

module.exports = async (req, res) => {
  const canditate = await User.findOne({email: req.body.email});

  if (canditate) {
    res.status(409).json({
      message: 'Error',
    });
  } else {
    const salt = bcrypt.genSaltSync(10);
    const password = req.body.password;
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(password, salt),
    });
    try {
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      errorHandler(res, error);
    }
  }
};