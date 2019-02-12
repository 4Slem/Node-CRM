const Employee = require('./models');
const errorHandler = require('../../utils/errorHandler');

module.exports.getAll = async (req, res) => {
  try {
    const employee = await Employee.find({ user: req.user.id });
    res.status(200).json(employee);
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports.remove = async (req, res) => {
  try {
    await Employee.remove({
      _id: req.params.id,
      user: req.user.id
    });
    res.status(200).json({ message: 'Delete' });
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports.create = async (req, res) => {
  try {
    const employee = await new Employee({
      name: req.body.name,
      surname: req.body.surname,
      user: req.user.id,
      department: req.body.department,
      skills: req.body.skills,
      active: req.body.active,
      avatar: req.body.avatar
    }).save();
    res.status(201).json(employee);
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports.update = async (req, res) => {
  try {
    const employee = await Employee.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(employee);
  } catch (error) {
    errorHandler(res, error);
  }
};