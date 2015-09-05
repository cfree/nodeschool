var arg1 = process.argv[2];
var arg2 = process.argv[3];

import {PI} from './modules-with-name-module';
import {sqrt} from './modules-with-name-module';
import {square} from './modules-with-name-module';

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));