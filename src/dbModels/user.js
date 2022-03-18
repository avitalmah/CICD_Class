const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  country: String,
  city: String,
  street: String,
  streetNumber: String,
  aptNumber: String,
  zip: String,
});

module.exports = mongoose.model('User', UserSchema);

