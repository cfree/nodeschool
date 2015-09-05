var uniq = require('uniq');

var input = prompt('enter a list');

console.log(uniq(input.split(',')));