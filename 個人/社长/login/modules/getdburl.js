/* DBconnect DBUrl 作成モジュール */
var config = require('../config/db.json');

function geturl(useType){

    var dbconfig;

    if (useType=="dev"){
        dbconfig = config.devDB;
    }

    if (useType=="app"){
        dbconfig = config.appDB;
    }

    if (useType=="test"){
        dbconfig = config.testDB;
    }

    return dbconfig.type +'://'
         + dbconfig.host +':'
         + dbconfig.port +'/'
         + dbconfig.dbName;
};

module.exports.geturl = geturl;