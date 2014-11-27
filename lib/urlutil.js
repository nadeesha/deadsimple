exports.rinse = function (url) {
	// remove any query strings
	url = url.split('?')[0];

	// remove a trailing '/'
	if (url.indexOf(url.length-1) === '/') {
		url = url.slice(0, url.length-2);
	}

	return url;
}

exports.mapfile = function (url) {
	if (url === '/') {
		return './content/index.md'
	} else {
		return './content' + url + '.md';
	}
}