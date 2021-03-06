const Employee = require('./models');
const errorHandler = require('../../utils/errorHandler');

module.exports.getAll = async (req, res) => {
  const query = {
  };

  if (req.query.department) { query.department = req.query.department; }
  if (req.query.position) { query.position = req.query.position; }
  if (req.query.name) { query.name = req.query.name; }

  try {
    const employee = await Employee
      .find(query)
      .skip(+req.query.offset * +req.query.limit)
      .limit(+req.query.limit).populate('skills').populate('position').populate('department').exec();

    res.status(200).json(employee);
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports.remove = async (req, res) => {
  try {
    await Employee.remove({
      _id: req.params.id,
    });
    res.status(200).json({ message: 'Delete' });
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports.create = async (req, res) => {
  try {

    let employee = await new Employee({
      name: req.body.name,
      surname: req.body.surname,
      department: req.body.department,
      skills: req.body.skills,
      active: req.body.active,
      position: req.body.position,
      image: req.file ? req.file.path : '',
      user: req.user.id,
    }).save();
    let user = await Employee.findOne({'_id': employee._id}).populate('skills').populate('position').populate('department');
    res.status(201).json(user);
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports.update = async (req, res) => {
  const updated = {
    name: req.body.name,
    surname: req.body.surname,
    department: req.body.department,
    skills: req.body.skills,
    position: req.body.position,
  };

  // if (file) {
  //   updated.image = req.file.path;
  // }

  try {
    const employee = await Employee.findOneAndUpdate(
      { _id: req.params.id },
      { $set: updated },
      { new: true }
    );
    let user = await Employee.findOne({'_id': employee._id}).populate('skills').populate('position').populate('department');
    res.status(200).json(user);
  } catch (error) {
    errorHandler(res, error);
  }
};