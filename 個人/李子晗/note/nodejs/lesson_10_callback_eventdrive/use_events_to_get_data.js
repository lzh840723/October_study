var fs = require('fs');
var events = require('events');

var eventEmitter = new events.EventEmitter();

function getMime(callback) {
    fs.readFile('mime.json', (error, data) => {
        eventEmitter.emit('data', data);
    })
}

getMime();

eventEmitter.on('data', (mime) => {
    console.log(mime.toString());
})