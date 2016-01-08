var http = require('http'),
	BufferList = require('bl'),
	results = [],
	count = 0;

function goGetIt(index) {
	http.get(process.argv[2 + index], function(res) {
		res.setEncoding('utf8');
		
		res.pipe(BufferList(function(err, data) {
			// Important!
			if (err) {
				return console.error(err);
			}

			results[index] = data.toString();
			count++;
			

			if (3 === count) {
				for (var j = 0; j < results.length; j++) {
					console.log(results[j]);
				}
			}
		}));
	});
}

for (var i = 0; i < 3; i++) {
	goGetIt(i);
}