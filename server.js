'use strict';

var http = require('http'),
    reader = require('./lib/reader'),
    urlutil = require('./lib/urlutil');

var header, footer;

function setup(done) {
	console.info('setting up your server');

    reader.read('./partials/header.html', function (err, data) {
        if(err) {
            console.error('error reading header.html');
        }

        header = data;
        done();
    });

    reader.read('./partials/footer.html', function (err, data) {
        if(err) {
            console.error('error reading footer.html');
        }

        footer = data;
        done();
    });
}

function parse(url, done) {
    url = urlutil.rinse(url);
    var filename = urlutil.mapfile(url);

    console.info('mapped: %s --> %s', url, filename);

    reader.read(filename, function (err, page) {
        if(err) {
            console.error(err);

        	if (err.code === 'ENOENT') {
        		return done(null, 404);
        	} else {
        		return done(err, 500);
        	}
        }

        var html = header + '\r\n' + page + '\r\n' + footer;

        done(null, 200, html);
    });
}

function serve (req, res) {
    var headers = {
        'Content-Type': 'text/html'
    };

    parse(req.url, function (err, code, html) {
        if(err) {
            console.error(err);
        }

        res.writeHead(code, headers);
        res.end(html, 'utf8');
    });
}

setup(function () {
	if (header && footer) {
		console.info('set up done! now serving files');
		http.createServer(serve).listen(9615);
	}
});


