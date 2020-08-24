const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({  
  name: {type:String , default: ''},
  email: {type:String , default: ''},
  password: {type:String , default: ''}
});


mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');