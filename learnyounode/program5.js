var file = process.argv[2],
	ext = process.argv[3],
	fs = require('fs'),
	path = require('path'),
	results = [];

fs.readdir(file, function(err, list) {
	for(var i = 0; i < list.length; i++) {
		if (1 === path.extname(list[i]).indexOf(ext)) {
			console.log(list[i]);
		}
	}
});