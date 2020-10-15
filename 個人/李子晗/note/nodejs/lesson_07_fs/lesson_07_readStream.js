const fs = require("fs");

// 流的方式读取文件
var readStream = fs.createReadStream('../test/test.txt');

var str = ''; //保存数据
var count = 0;
//读取
readStream.on('data', function(chunk) {
    str += chunk;
    count++;
})

// 读取完成
readStream.on('end', function(chunk) {
    console.log(str);
    console.log(count);
})

// 读取错误
readStream.on('error', function(err) {
    console.log(err);
})