var repeatCallback = require(process.argv[2]),
	test = require('tape');

test('repeatCallback', function(t) {
	var num = 5;

	t.plan(num);

	repeatCallback(num, function() {
		t.pass('callback called');
	});
});