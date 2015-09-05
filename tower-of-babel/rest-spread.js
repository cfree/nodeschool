var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') args.push(+val);
  });
});

// write a function called `avg` here that calculates the average.
var avg = function(...args) {
	let sum = args.reduce((sum, n) => {
		return sum + n;
	});

	return sum/args.length;
};

console.log(avg(...args));