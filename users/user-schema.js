const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  username: String,
  password: String,
  role: String,
  email: String,
  firstName: String,
  lastName: String,
  bookmarks : []
}, {collection: 'users'});
module.exports = userSchema;