(() => {
	'use strict';

	let path = require('path')
	let express = require('express')
	let stylus = require('stylus')
	let app = express()
	let port = process.argv[2]
	let pathname = process.argv[3] || path.join(__dirname, 'public')

	app.use(stylus.middleware(pathname))
	app.use(express.static(pathname))

	app.listen(port)

})();