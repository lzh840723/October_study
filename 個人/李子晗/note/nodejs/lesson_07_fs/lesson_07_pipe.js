var fs = require("fs");

var readStream = fs.createReadStream('../test/output.txt');
var writeStream = fs.createWriteStream('../test/input.txt');

// 管道操作
readStream.pipe(writeStream);

console.log('finish');