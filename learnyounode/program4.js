var fileName = process.argv;

var fs = require('fs');

fs.readFile(fileName[2], function(err, data) {
	var res = data.toString();

	var splitLines = res.split('\n');

	console.log(splitLines.length - 1);
});