//dbconnetor 
var dburl = require('./getdburl');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var dbconnect = {};

//useType dev->devDB app->appDB test->testDB
dbconnect.open = function(useType){

    var url = dburl.geturl(useType);

    mongoose.connect(url)
      .then(() =>  console.log('DBconnection succesful'))
      .catch((err) => console.error(err));

};

dbconnect.close = function(){

    mongoose.connection.close()
      .then(() =>  console.log('DBconnection is closed'))
      .catch((err) => console.error(err));

};
module.exports = dbconnect;
