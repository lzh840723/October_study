var fs = require('fs');

// 1. 判断是否存在upload目录，没有则创建。（用于图片上传）
// fs.stat('../test/test_create', function(err, stats) {
//     if (err) {
//         fs.mkdir('../test/test_create', function(error) {
//             if (error) {
//                 console.log(error);
//                 return false;
//             }
//             console.log("创建成功");
//         })
//     } else {
//         console.log("文件夹:" + stats.isDirectory());
//         console.log("目录已存在");
//     }
// })

// 2. 找出目录下的所有目录，并打印
// 错误
// fs.readdir('../test/', function(error, files) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(files);
//         for (var i; i < files.length; i++) {
//             fs.stat(files[i], function(error, stats) { // 因为异步
//                 console.log(stats);
//             })
//         }
//     }
// })

// 正确的写法：使用匿名函数和递归
var filesArr = [];
fs.readdir('../test/', function(error, files) {
    if (error) {
        console.log(error);
    } else {
        (function getFile(i) {
            if (i == files.length) {
                console.log(filesArr);
                return false;
            }
            fs.stat('../test/' + files[i], function(error, stats) {
                // console.log(files[i]);
                if (stats.isDirectory()) {
                    filesArr.push(files[i]); // 保存数据
                }

                // 递归调用
                getFile(i + 1);
            })
        })(0)
    }
})