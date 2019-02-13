const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: '',
  },
  active: {
    status: Boolean,
    default: false,
  },
  position: {
    ref: 'Positions',
    type: Schema.Types.ObjectId,
    required: true,
  },
  department: {
    ref: 'Departments',
    type: Schema.Types.ObjectId,
    required: true,
  },
  skills: [{
    ref: 'Skills',
    type: Schema.Types.ObjectId
  }],
  user: {
    ref: 'Users',
    type: Schema.Types.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model('Employee', schema);
