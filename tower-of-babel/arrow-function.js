var inputs = process.argv.slice(2);
var result = inputs.map((word) => { return word.charAt(0) })
	.reduce((prev, cur) => { return prev + cur });

console.log(result);