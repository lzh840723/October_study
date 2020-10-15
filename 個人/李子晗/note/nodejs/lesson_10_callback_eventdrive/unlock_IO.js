var fs = require('fs');

/**
 * 异步  输出132
 */
// console.log(1);
// fs.readFile('./mime.json', function(err, data) {
//     // console.log(data);
//     console.log(2);
// })
// console.log(3);

/**
 * 异步 无法返回data
 */
// function getMime() {
//     fs.readFile('./mime.json', function(err, data) {
//         return data.toString();
//     })

//     return 111;
// }

/**
 * 输出111
 */
// console.log(getMime());