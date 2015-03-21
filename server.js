var express = require('express'),
    util = require('util');

var app = express();

var banners = {
    0: {
        name: 'anthony',
        title: 'title-anthony.png'
    },
    1: {
        name: 'pieter',
        title: 'title-title-pieter.png'
    }
};

var books = {
    0: {
        title: 'Een dag in Gent',
        background: 'bg-herman.png',
        cover: 'cover.png',
        author: 'Herman Brusselmans',
        short: '',
        long: ''
    }
};

var pickRandomProperty = function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
            result = prop;
    return result;
};

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('view options', { layout: false }); // NOTE: express3 remove

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/app', function (req, res) {
    console.log(pickRandomProperty(banners));
    res.render('app', {
        banner : banners[pickRandomProperty(banners)],
        book : books[pickRandomProperty(books)]
    });
});

app.listen(8000);
util.puts('> geboekt.gent running on port 8000');