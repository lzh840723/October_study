var md5 = require('md5-node');

module.exports.toMd5String = function(string) {
    return md5(string);
}
