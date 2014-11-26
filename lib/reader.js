var fs = require('fs');

// right now we read and serve as and when it's needed
// needless to say, this is bullcrap. we need caching here
// that's a fight for another day #todo:
exports.read = function (name, done) {
	fs.readFile(name, {encoding: 'utf8', flag: 'r'}, done);
};