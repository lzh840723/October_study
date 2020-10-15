var dateformat = require('dateformat');

exports.getDate = function(){
    var date = dateformat(new Date(), 'yyyy年mm月dd日 HH時MM分ss秒')
    return date;
}