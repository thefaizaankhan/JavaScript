const userEmail = []
const userObject = {}

if(userEmail) {
    console.log("Got the user email");
} else {
    console.log("Don't have a user email");
}

/*
Falsy values in JS :-
undefined
null
false
0 (the number zero)
-0 (negative zero)
BigInt 0n
NaN (Not a Number)
"" (empty string)

Truthy values in JS :-
String
Array
Integers
Symbol
"0"
'false'
" " (string with a space)
function(){} (Empty Function)
*/

// to check empty array
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// to check empty object
if (Object.keys(userObject).length === 0) {
    console.log("object is empty");
}

// Special cases
console.log(false == "") // true
console.log(false == 0) // true
console.log(0 == "") // true

// Nullish Coalescing Operator or Null Coalesance Operator (??) : null undefined
// it does safety check for null and undefined
let val1 
// val1 = 5 ?? 10 // value 5 is assigned
val1 = null ?? 10  // value 10 is assigned
val1 = undefined ?? 55  // value 55 is assigned
// val1 = null ?? 10 ?? 44  // first value is assigned

console.log(val1)


// Terniary Operator (?)
// condition ? true : false;

const teaPrice = 200

teaPrice <= 100 ? console.log("Price is less than 100") : console.log("Price is more than 100")

//------------------------------------------------
// just trying to find out why ? trying and testing !
// const myArray = [1, 2, 3]
// if (myArray.length === 0){
//     console.log("Empty");
// } else {
//     console.log("not empty");  
// }
// const myObj = {
//     name: "Faizaan",
//     city: "Delhi",
//     area: "Delight Palace"
// }

// console.log(Object.keys(myObj).length === 0)
// console.log(Array.isArray(Object.keys(myObj)))
//-----------------------------------------------

// Arrays in JavaScript are a special kind of object.

/* 
Type Coercion in JS:-
Type coercion in JavaScript refers to the automatic or implicit conversion of values from one data type to another.

Implicit Coercion (Automatic Conversion)
console.log(1 + "2"); // "12" (number 1 is coerced to a string)
console.log("5" - 2); // 3 (string "5" is coerced to a number)
console.log(false + 1); // 1 (false is coerced to 0)

Explicit Coercion (Manual Conversion)
console.log(Number("42")); // 42 (explicitly convert string to number)
console.log(String(123)); // "123" (explicitly convert number to string)
console.log(Boolean(0)); // false (explicitly convert number to boolean)
*/