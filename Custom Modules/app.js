// Custom Module in Node.js
const greetings = require('./Modules/SingleModules.js');
const message = greetings('Suriya');
console.log(message);

// Multiple Module in Node.js
const math = require('./Modules/MultipleModules');

console.log(math.add(2, 3));
console.log(math.multiply(2, 3));
console.log(math.subtract(2, 3));
console.log(math.divide(2, 0));
