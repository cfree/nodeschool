const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
  	let curNum = 1;

  	return {
  		next() {
		    if (curNum % 3 === 0 && curNum % 5 === 0 && curNum <= max) {
		    	curNum++;

		    	return {
		    		done: false,
		    		value: 'FizzBuzz'
		    	}
		    } else if (curNum % 3 === 0 && curNum <= max) {
		    	curNum++;

		    	return {
		    		done: false,
		    		value: 'Fizz'
		    	}
		    } else if (curNum % 5 === 0 && curNum <= max) {
		    	curNum++;

		    	return {
		    		done: false,
		    		value: 'Buzz'
		    	}
		    } else if (curNum <= max) {
		    	let orig = curNum;
		    	curNum++;

		    	return {
		    		done: false,
		    		value: orig
		    	}
		    }

  			return { done: true };
  		}
  	}
  }
}

for (var n of FizzBuzz) {
	console.log(n);
}