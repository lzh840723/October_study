const fs = require('fs');

var data = "これはデータの保存テストです。\n"

// 创建写入流
var writeStream = fs.createWriteStream('../test/test.txt');

for (var i = 0; i < 10; i++) {
    writeStream.write(data, 'utf-8');
}

writeStream.end();

writeStream.on('finish', function() {
    console.log('finish');
});

writeStream.on('error', function() {
    console.log("error");
})