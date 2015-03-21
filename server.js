var express = require('express'),
    util = require('util');

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('view options', { layout: false }); // NOTE: express3 remove

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/app', function (req, res) {
    res.render('app');
});

app.listen(8000);
util.puts('> geboekt.gent running on port 8000');