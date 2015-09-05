var fs = require('fs'),
	path = require('path'),
	results = [],
	exts = [];

module.exports = function(dir, extFilter, callback) {
	fs.readdir(dir, function(err, list) {
		if (err) {
			return callback(err, null);
		}

		for(var i = 0; i < list.length; i++) {
			// Is there an index with the current extension?
			if (1 === path.extname(list[i]).indexOf(extFilter)) {
				results.push(list[i]);
			}
		}

		callback(null, results);
	});
};