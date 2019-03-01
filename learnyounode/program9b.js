var http = require('http'),
	async = require('async'),
	bl = require('bl'),
	links = process.argv.slice(2);

function fetchUrl(url, cb) {
	http.get(url, res => {
		res.setEncoding('utf8');
		
		res.pipe(bl((err, data) => {
			if (err) {
				return console.error(err);
			}

			// Return the callback for async processes
			return cb(null, data.toString());
		}));
	});
}

function processResults(err, results) {
	if (err) {
		console.error(err);
	}

	results.forEach(result => console.log(result));
}

async.map(links, fetchUrl, processResults);