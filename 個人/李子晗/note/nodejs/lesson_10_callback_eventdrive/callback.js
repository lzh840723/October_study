var fs = require('fs');

// 用回调函数处理异步拿到data 
function getMime(callback) {
    fs.readFile('./mime.json', function(err, data) {
        callback(data.toString());
    })
}

getMime(function(dataStr) {
    console.log(dataStr);
})