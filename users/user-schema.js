const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  username: String,
  password: String,
  role: String,
  email: String,
  firstName: String,
  lastName: String,
}, {collection: 'users'});
module.exports = userSchema;