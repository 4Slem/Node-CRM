const Skills = require('./models');
const errorHandler = require('../../utils/errorHandler');

module.exports.getAll = async (req, res) => {
  try {
    const skills = await Skills.find({ user: req.user.id });
    res.status(200).json(skills);
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports.remove = async (req, res) => {
  try {
    await Skills.remove({
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
    const skills = await new Skills({
      name: req.body.name,
      rating: req.body.rating,
      type: req.body.type,
      user: req.user.id
    }).save();
    res.status(201).json(skills);
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports.update = async (req, res) => {
  try {
    const skills = await Skills.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(skills);
  } catch (error) {
    errorHandler(res, error);
  }
};