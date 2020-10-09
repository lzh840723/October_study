var fs = require('fs');

// 通过mime.jsoj获取后缀名的方法
exports.getMime = function(eventEmitter, extname) {
    /**** 用回调实现异步读取 *****/
    fs.readFile('./mime.json', function(error, data) {
        if (error) {
            console.log("mime.json文件不存在");
            console.log(error);
            return false;
        }

        // console.log(data.toString());
        var mimes = JSON.parse(data.toString());
        // console.log(mimes[extname]);
        var mimeStr = mimes[extname] || 'text/html';

        console.log("exec to_mime");
        eventEmitter.emit("to_mime", mimeStr);
    });

    // 同步读取
    // var data = fs.readFileSync('./mime.json');
    // var mimes = JSON.parse(data.toString());
    // return mimes[extname] || 'text/html';
}