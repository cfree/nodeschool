var ndjson = require('./ndjson');

var strToArray = prompt('enter a string to parse into an array of objects');
console.log(ndjson.parse(strToArray));
	
var arrayToStr = prompt('enter an array to serialize into a string');
console.log(ndjson.stringify(arrayToStr));
