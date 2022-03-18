const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  streetNumber: {
    type: String,
    required: true,
  },
  aptNumber: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', UserSchema);

