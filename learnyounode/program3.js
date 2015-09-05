var fileName = process.argv;

var fs = require('fs');

var buffer = fs.readFileSync(fileName[2]);

var res = buffer.toString();

var splitLines = res.split('\n');

console.log(splitLines.length - 1);