var mathlib = require('./library/mathlib.js')();

console.log('Add 3+5: Total=', mathlib.add(3,5));
console.log('Multiply 3x5: Total=', mathlib.multiply(3,5));
console.log('Square 5: Total=', mathlib.square(5));
console.log('Random number between 1-35: ', mathlib.random(1,35));