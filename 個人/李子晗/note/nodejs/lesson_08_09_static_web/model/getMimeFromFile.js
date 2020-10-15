var fs = require('fs');

// 通过mime.jsoj获取后缀名的方法
exports.getMime = function(extname) {
    /**** fs.readFile的读取为一步执行， 会出问题。 *****/
    // fs.readFile('./mime.json', function(error, data) {
    //     if (error) {
    //         console.log("mime.json文件不存在");
    //         console.log(error);
    //         return false;
    //     }

    //     // console.log(data.toString());
    //     var mimes = JSON.parse(data.toString());
    //     // console.log(mimes[extname]);
    //     return mimes[extname] || 'text/html';
    // });

    // 同步读取
    var data = fs.readFileSync('./mime.json');
    var mimes = JSON.parse(data.toString());
    return mimes[extname] || 'text/html';
}