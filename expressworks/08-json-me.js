(() => {
	'use strict';

	let express = require('express')
	let app = express()
	let port = process.argv[2]
	let pathname = process.argv[3]
	let fs = require('fs')

	app.get('/books', (req, res) => {
		fs.readFile(pathname, (err, data) => {
			let books

			if (err) {
				return res.sendStatus(500)
			}

			try {
				books = JSON.parse(data)
			} catch (e) {
				res.sendStatus(500)
			}

			res.json(books)
		})
	})

	app.listen(port)

})();