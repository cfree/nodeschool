var feedCat = require(process.argv[2]),
	test = require('tape');

test('feed the cat', function(t) {
	t.equal(feedCat('meowmix'), 'yum', 'meowmix delivered');
	t.throws(function() {
		feedCat('chocolate');
	}, 'avoid this food');
	t.end();
});