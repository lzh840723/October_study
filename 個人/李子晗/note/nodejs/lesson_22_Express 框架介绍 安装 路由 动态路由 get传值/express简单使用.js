var express = require('express');

var app = new express();

app.get('/', function (req, res) {
    res.send('hello express!');
})

app.get('/news', function (req, res) {
    res.send('hello news!');
})

app.listen(8001, '127.0.0.1');
