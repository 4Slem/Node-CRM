const Employee = require('./models');
const errorHandler = require('../../utils/errorHandler');

module.exports.getAll = async (req, res) => {
  const query = {
    user: req.user.id,
  };

  if (req.query.department) { query.department = req.query.department; }
  if (req.query.skills) { query.skills = req.query.skills; }
  if (req.query.position) { query.position = req.query.position; }
  if (req.query.active) { query.active = req.query.active; }

  try {
    const employee = await Employee
      .find(query)
      .skip(+req.query.offset * +req.query.limit)
      .limit(+req.query.limit);

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
      position: req.body.position,
      image: req.file ? req.file.path : '',
    }).save();
    res.status(201).json(employee);
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports.update = async (req, res) => {
  const updated = {
    name: req.body.name,
    surname: req.body.surname,
    user: req.user.id,
    department: req.body.department,
    skills: req.body.skills,
    active: req.body.active,
    position: req.body.position,
  };

  if (file) {
    updated.image = req.file.path;
  }

  try {
    const employee = await Employee.findOneAndUpdate(
      { _id: req.params.id },
      { $set: updated },
      { new: true }
    );
    res.status(200).json(employee);
  } catch (error) {
    errorHandler(res, error);
  }
};