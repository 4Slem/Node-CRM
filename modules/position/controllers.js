const Positions = require('./models');
const errorHandler = require('../../utils/errorHandler');

module.exports.getAll = async (req, res) => {
  try {
    const positions = await Positions.find({ user: req.user.id });
    res.status(200).json(positions);
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports.remove = async (req, res) => {
  try {
    await Positions.remove({
      _id: req.params.id,
      user: req.user.id,
    });
    res.status(200).json({ message: 'Delete' });
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports.create = async (req, res) => {
  try {
    const positions = await new Positions({
      name: req.body.name,
      user: req.user.id
    }).save();
    res.status(201).json(positions);
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports.update = async (req, res) => {
  try {
    const positions = await Positions.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(positions);
  } catch (error) {
    errorHandler(res, error);
  }
};