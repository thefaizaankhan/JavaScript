// Array

// It is a collection of multiple items stored in a single variable name.

// JS arrarys are resizable.
// JS arrays are not associative arrays.
// JS arrays starts indexing from zero.
// JS array-copy-operations create shallow copies.(shallow copies -> referencing to the same point in memory -> changes made in one will affect another)

const myArr = [1, 2, 3, 4, 5, true, "faizaan"]

const myHeros = ["ironman", "captain america", "dr strange"]

// creating array using new Array() constructor
const myArr2 = new Array(1, 2, 3, 4, 5)

// console.log(myArr2);

// console.log(myArr[1]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);

// while using unshift() we see in ouput that value 9 is added at the start hence we shifted all the positions of the array what if there were 10,000 elements then ? it will be a heavy task for machine here optimazation comes but execution is first 
// myArr.unshift(9)
// console.log(myArr);
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(12));
// console.log(myArr.includes(2));

// console.log(myArr.indexOf(56));
// console.log(myArr.indexOf(2));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); // join() converts array into string 

// slice and splice

console.log("A ", myArr); // original array

const myNewArray = myArr.slice(1, 3) // sliced value from index 1 to index 2 (index 3 excluded) -> [2, 3]

console.log(myNewArray);
console.log("B ", myArr); // sliced array ( original array unchanged)

const myNewArray2 = myArr.splice(1, 3) // splice - remove 3 elements starting from index 1 -> [2, 3, 4]
console.log("C ", myArr); // spliced array (original array changed)
console.log(myNewArray2);

// slice - original array remains unchanged

// splice - original array is modified

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* 
SERIALIZATION IN JS   

In JavaScript, serialization is the process of converting an object or data structure into a format that can be easily stored, transmitted, or reconstructed later. A serializable object in JavaScript is an object that can be represented as a string format (typically JSON) for these purposes.


A serializable object can:
Be converted into a string format like JSON (using JSON.stringify()).
Be reconstructed back into its original form (using JSON.parse()).
*/

//++++++++++++++++++++++++++++++++++++++++++++++++++