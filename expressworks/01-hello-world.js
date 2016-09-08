(() => {
	'use strict';

	let express = require('express')
	let app = express()
	let port = process.argv[2]

	app.get('/home', (req, res) => {
	  res.end('Hello World!')
	})

	app.listen(port)
})();