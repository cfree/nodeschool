(() => {
	'use strict';

	let express = require('express')
	let app = express()
	let port = process.argv[2]
	let bodyparser = require('body-parser')

	// app.use(bodyparser.urlencoded({extended: false}))
	// app.post('/form', (req, res) => {
	app.post('/form', bodyparser.urlencoded({extended: false}), (req, res) => {
		if (!req.body) {
			return res.sendStatus(400) 
		}

		let str = req.body.str.split('').reverse().join('');
		
		res.send(str);
	})

	app.listen(port)

})();