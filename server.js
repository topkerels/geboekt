var util = require('util'),
    http = require('http'),
    fs = require('fs');

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(8000);
});

/* server started */
util.puts('> geboekt.gent running on port 8000');