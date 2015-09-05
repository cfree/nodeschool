var dir = process.argv[2],
	extFilter = process.argv[3],
	sorted = require('./program6b.js');

sorted(dir, extFilter, function(err, data) {
	for(var i in data) {
		console.log(data[i]);	
	}
});