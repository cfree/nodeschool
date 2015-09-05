var arg1 = process.argv[2];
var arg2 = process.argv[3];

import customName from './modules-default-export-math';

console.log(customName.PI);
console.log(customName.sqrt(+arg1));
console.log(customName.square(+arg2));