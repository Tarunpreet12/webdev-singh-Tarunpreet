var mongoose = require('mongoose');

var connectionString = 'mongodb://localhost:27017/cs5610';
if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds133964.mlab.com:33964/heroku_s216dvhd'; // use yours
}
var db = mongoose.connect(connectionString, { useMongoClient: true });

module.exports = db;
