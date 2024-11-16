// here js automatically detects that score should have a datatype of number 
const score = 500;
// console.log(score);

// but you can also explicitly define that you want a datatype of number only -> by using new keyword
const balance = new Number(100)
// console.log(balance);
// 
// converts number to string 
// console.log(balance.toString())
// console.log(balance.toString().length)

// to set a fixed precision value 
// console.log(balance.toFixed(2))
// console.log(balance.toFixed(1))

const otherNumber = 445.67888

// to set a round off value and priority is before decimal (in most cases) *use it carefully
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000

// to set representation of numbers with US Standards
// console.log(hundreds.toLocaleString());

// to set representation of numbers with Indian Standards
// console.log(hundreds.toLocaleString('en-IN'));

// (* look in Inspect Element in Browser -> type Number -> and built in methods)

//++++++++++++++++++  Maths  ++++++++++++++++++++++++++++++

console.log(Math)

// abs() -> returns absolute value of a number (-ive value -> +ive value)
// console.log(Math.abs(-7))

// round() -> returns a round off value
// console.log(Math.round(45.78))

// returns a upper value (top value)
// console.log(Math.ceil(5.6))

// returns a lower value
// console.log(Math.floor(5.3))

// square root of a number
// console.log(Math.sqrt(9))

// min value in a array
// console.log(Math.min(2, 3, 4, 5))

// max value in a array
// console.log(Math.min(2, 3, 4, 5))

// random number (between 0 and 1)
console.log((Math.random()));

// to get randorm value in ones but not zero
console.log((Math.random() * 10) + 1);

// to get the whole value without decimals (number greater than 1)
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20

// *IMPORTANT
console.log(Math.floor(Math.random() * (max - min + 1)) + min)



