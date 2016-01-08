var http = require('http'),
	BufferList = require('bl'),
	bl = new BufferList(),
	results;

http.get(process.argv[2], function(res) {
	res.setEncoding('utf8');
	
	res.pipe(BufferList(function(err, data) {
		results = data.toString();
		console.log(results.length);
		console.log(results);
	}));
});