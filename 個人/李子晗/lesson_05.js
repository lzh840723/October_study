// 1. 引入
var fs=require('fs');

// 2. fs.start检测文件还是目录
// fs.stat('lesson_04.js',function(err, stats){
//     if(err) {
//         console.log(err);
//         return false;
//     }

//     console.log("文件:"+stats.isFile());
//     console.log("文件夹:"+stats.isDirectory());
// });

// 3. fs.mkdir 创建目录
// 接受参数
//      path        创建目录的路径
//      mode        目录权限（读写权限）：0777
//      callback    回调，传递异常参数err
// fs.mkdir('test',function(err){
//     if(err) {
//         console.log(err);
//         return false;
//     }
//     console.log("创建目录成功");
// })

// 4. fs.writeFile 写入文件 (文件不存在则创建，存在则覆盖)
// 接受参数
//      filename    string              文件名或路径
//      date        string|buffer       写入的内容
//      option      object              option数组对象,包含：
//          ·encoding   string              可选值，默认utf-8，当data使用buffer时，该值为ignored。
//          ·mode       Number              文件读写权限，默认为438
//          ·flag       string              默认为 w
//      callback        Function        回调，传递异常参数err

// fs.writeFile('./test/write.txt','hello nodejs',function (err) {
//     if(err) {
//         console.log(err);
//         return false;
//     }
//     console.log("创建文件成功");
// });

// 5. fs.appendFile 追加文件
// fs.appendFile('./test/write.txt','这是追加的内容',function (err) {
//     if(err) {
//         console.log(err);
//         return false;
//     }
//     console.log("追加成功");
// })

// 6. fs.readFile 读取文件
// fs.readFile('./test/write.txt',function (err, data) {
//     if(err) {
//         console.log(err);
//         return false;
//     }
//     // console.log(data);   //data为16进制数据
//     console.log(data.toString());
// });

// 7. fs.readdir 读取目录
// fs.readdir('./',function (err, dir) {
//     if(err) {
//         console.log(err);
//         return false;
//     }
//     console.log(dir.toString());
// });

// 8. fs.rename 重命名(改名，或剪切文件)
// 8.1  rename
// fs.rename('./test/write.txt','./test/new_write.txt',function (err) {
//     if(err) {
//         console.log(err);
//         return false;
//     }
//     console.log("rename 成功");
// });

// 8.2 cut
// fs.rename('./new_write.txt','./test/new_write.txt',function (err) {
//     if(err) {
//         console.log(err);
//         return false;
//     }
//     console.log("cut 成功");
// });

// 9. fs.rmdir 删除目录 (只能删除目录，不能删除文件)
// fs.rmdir('t',function (err) {
//     if(err) {
//         console.log(err);
//         return false;
//     }
//     console.log("删除目录成功");
// });

// 10. fs.unlink 删除文件
fs.unlink('test/test.txt',function (err) {
    if(err) {
        console.log(err);
        return false;
    }
    console.log("删除文件成功");
});
