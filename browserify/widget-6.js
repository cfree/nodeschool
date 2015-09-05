var domify = require('domify'),
	html = '<div>Hello <span class="name"></span>!</div>';

module.exports = function() {
	var element = domify(html);

	return {
		setName: function(str) {
			element.querySelector('.name').innerHTML = str;
		},
		appendTo: function(target) {
			target.appendChild(element);
		}
	};
};