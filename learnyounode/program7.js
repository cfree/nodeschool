var http = require('http'),
	BufferList = require('bl'),
	bl = new BufferList();

http.get(process.argv[2], function(res) {
	res.setEncoding('utf8');
	res.on('data', function(err, data) {
		bl.append(data);
	});
});

// Count
console.log(bl.length);
// Concat
console.log(bl.toString());