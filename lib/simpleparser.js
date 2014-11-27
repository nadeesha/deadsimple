var urlutil = require('./urlutil'),
    reader = require('./reader');

exports.parse = function (options, done) {
    options.url = urlutil.rinse(options.url);
    var filename = urlutil.mapfile(options.url);

    console.info('mapped: %s --> %s', options.url, filename);

    reader.read(filename, function (err, page) {
        if(err) {
            console.error(err);

            if(err.code === 'ENOENT') {
                return done(null, 404);
            } else {
                return done(err, 500);
            }
        }

        var html = options.header + '\r\n' + page + '\r\n' + options.footer;

        done(null, 200, html);
    });
};
