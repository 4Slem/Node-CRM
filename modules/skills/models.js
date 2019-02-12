const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
    required: true,
  },
  type: {
    ref: 'Departments',
    type: Schema.Types.ObjectId,
    required: true,
  },
  user: {
    ref: 'Users',
    type: Schema.Types.ObjectId,
    required: true,
  }
});

module.exports = mongoose.model('Skills', schema);
