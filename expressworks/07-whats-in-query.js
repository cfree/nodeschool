(() => {
	'use strict';

	let express = require('express')
	let app = express()
	let port = process.argv[2]

	app.get('/search', (req, res) => {
		let str = req.query;
		
		res.send(str);
	})

	app.listen(port)

})();