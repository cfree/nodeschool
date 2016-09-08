(() => {
	'use strict';

	let path = require('path')
	let express = require('express')
	let app = express()
	let port = process.argv[2]
	let crytpo = require('crypto')

	app.put('/message/:id', (req, res) => {
		let id = req.params.id

		let sha = crytpo
	      .createHash('sha1')
	      .update(new Date().toDateString() + id)
	      .digest('hex')

	    res.send(sha);
	});

	app.listen(port)

})();