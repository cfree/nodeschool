const max = process.argv[2];

let FizzBuzz = function*() {
  	let curNum = 1;

  	while(curNum <= max) {
  		if (curNum % 3 === 0 && curNum % 5 === 0) {
	    	curNum++;
	    	yield 'FizzBuzz';
	    } else if (curNum % 3 === 0) {
	    	curNum++;
	    	yield 'Fizz';
	    } else if (curNum % 5 === 0) {
	    	curNum++;
	    	yield 'Buzz';
	    } else {
	    	let orig = curNum;
	    	curNum++;
	    	yield orig;
	    }
  	}
}();

for (var n of FizzBuzz) {
	console.log(n);
}