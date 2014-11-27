'use strict';

var http = require('http'),
    reader = require('./lib/reader'),
    parser = require('./lib/simpleparser'),
    PORT = process.env.PORT || 8888;

var header, footer;

function setup(done) {
	console.info('setting up your server');

    reader.read('./content/partials/header.html', function (err, data) {
        if(err) {
            console.error('error reading header.html');
        }

        header = data;
        done();
    });

    reader.read('./content/partials/footer.html', function (err, data) {
        if(err) {
            console.error('error reading footer.html');
        }

        footer = data;
        done();
    });
}

function serve (req, res) {
    var headers = {
        'Content-Type': 'text/html'
    };

    var options = {
        url: req.url,
        header: header,
        footer: footer
    };

    parser.parse(options, function (err, code, html) {
        if(err) {
            console.error(err);
        }

        res.writeHead(code, headers);
        res.end(html, 'utf8');
    });
}

setup(function () {
	if (header && footer) {
		console.info('set up done! now serving files on ' + PORT);
		http.createServer(serve).listen(PORT);
	}
});


