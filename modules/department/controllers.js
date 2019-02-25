const Department = require('./models');
const Skills = require('../skills/models');
const errorHandler = require('../../utils/errorHandler');

module.exports.getAll = async (req, res) => {
  try {
    const department = await Department.find({});
    res.status(200).json(department);
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports.remove = async (req, res) => {
  try {
    await Department.remove({
      _id: req.params.id,
    });
    await Skills.remove({
      type: req.params.id,
    });
    res.status(200).json({ message: 'Delete' });
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports.create = async (req, res) => {
  try {
    const department = await new Department({
      name: req.body.name,
      user: req.user.id,
    }).save();
    res.status(201).json(department);
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports.update = async (req, res) => {
  try {
    const department = await Department.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(department);
  } catch (error) {
    errorHandler(res, error);
  }
};