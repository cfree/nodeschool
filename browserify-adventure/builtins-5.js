var url = require('url'),
	querystring = require('querystring'),
	address = prompt('enter a url'),
	addr = url.parse(address),
	query = querystring.parse(addr.query);

console.log(url.resolve(addr.href, query.file));