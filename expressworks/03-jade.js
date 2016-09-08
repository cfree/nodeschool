(() => {
	'use strict';

	let path = require('path')
	let express = require('express')
	let app = express()
	let port = process.argv[2]
	let pathname = process.argv[3] || path.join(__dirname, 'templates')

	app.set('view engine', 'jade')
	app.set('views', pathname)

	app.get('/home', (req, res) => {
	  res.render('index', {date: new Date().toDateString()})
	})

	app.listen(port)

})();