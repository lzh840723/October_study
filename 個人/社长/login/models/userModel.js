//UserModel
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  password:String,
  email:String,
  date: { type: Date, default: Date.now }
 });

var UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
