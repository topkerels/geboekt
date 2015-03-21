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
        title: 'title-pieter.png'
    },
    2: {
        name: 'shaun',
        title: 'title-shaun.png'
    }
};

var books = {
    0: {
        title: 'Een dag in Gent',
        background: 'bg-herman.png',
        cover: 'cover-herman.png',
        author: 'Herman Brusselmans',
        short: 'Wakker worden, opstaan, tandenpoetsen. Spek eten. De echtgenote uitwuiven ',
        long: 'Op zomaar een dag uit het leven van Herman Brusselmans heeft hij heel wat te doen. Wakker worden, opstaan, tandenpoetsen. Spek eten. De echtgenote uitwuiven die naar Antwerpen vertrekt. De hond naar een oud, bevriend echtpaar brengen. Naar de apotheker gaan. Navraag doen in een motorwinkel. Een depressieve vrouw onderhouden en haar meenemen naar een restaurant, om er een eenvoudige lunch te gebruiken. Naar het theater lopen om de repetitie bij te wonen van een toneelstuk van eigen hand. Een meisje bezoeken op haar flatje. Op straat praten met een boekhouder. In een horlogewinkel de nieuwste modellen bekijken. Daar een vreemd avontuur beleven. De hond afhalen. ',
        review: {
            rating: 5,
            quote: 'Ranzig en goor. Helemaal perfect dus!'
        }
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