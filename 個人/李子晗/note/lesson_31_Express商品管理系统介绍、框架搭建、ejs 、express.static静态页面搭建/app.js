var express = require('express');


var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/login', function(req, res) {
    res.render('login');
});

app.get('/product', function(req, res) {
    res.send('product');
});

app.get('/productAdd', function(req, res) {
    res.send('productAdd');
});
app.get('/productEdit', function(req, res) {
    res.send('productEdit');
});

app.get('/productDelete', function(req, res) {
    res.send('productEdit');
});
app.listen(8001, '127.0.0.1');