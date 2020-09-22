const mongoose = require('mongoose');
const shortid = require('shortid');

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: shortid.generate 
  },
  username: {type:  String, required: true},
  email: {type: String, required: true, unique: true,dropDups: true},
  password: {type: String, required: true},
  isAdmin: {type: Boolean, required: true, default: false}
});

module.exports = mongoose.model('User', userSchema);