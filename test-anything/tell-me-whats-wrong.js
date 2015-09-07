var assert = require('assert'),
	isCoolNumber = require(process.argv[2]);

assert.strictEqual(isCoolNumber(42),true,'number should be 42');

