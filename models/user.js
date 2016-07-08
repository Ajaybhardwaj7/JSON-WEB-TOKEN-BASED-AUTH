var mongoose = require('mongoose');

var schema = new mongoose.Schema({ username : String , password : String , admin : Boolean});

var model = mongoose.model('User' , schema , "UserCredentials");

module.exports = model;
