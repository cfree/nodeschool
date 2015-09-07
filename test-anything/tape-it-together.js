var tape = require('tape'),
	fancify = require(process.argv[2]);

tape('fancify test', function(t) {
	t.equals(fancify('Test'), '~*~Test~*~', 'fancify(str) returns the str wrapped in ~*~');
	t.equals(fancify('Test', true), '~*~' + 'Test'.toUpperCase() + '~*~', 'optional second argument that converts the string into ALLCAPS');
	t.equals(fancify('Test', false, '!'), '~*~'.replace('*', '!') + 'Test' + '~*~'.replace('*', '!'), 'replace * with new option' );
	t.end();
});

