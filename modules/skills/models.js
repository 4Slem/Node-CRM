const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    ref: 'Departments',
    type: Schema.Types.ObjectId,
  },
  user: {
    ref: 'Users',
    type: Schema.Types.ObjectId,
    required: true,
  }
});

module.exports = mongoose.model('Skills', schema);
