var events = require('events');

// 广播和接收广播
var eventEmitter = new events.EventEmitter();

//j监听to_parent的广播
eventEmitter.on('parent', (data) => {
    console.log(data);
    eventEmitter.emit('mime', 'sended data to mime');
})

eventEmitter.on('mime', (data) => {
    console.log(data);
})

setTimeout(() => {
    console.log('开始广播。。。。');

    eventEmitter.emit('parent', 'sended data to parent');
}, 2000);