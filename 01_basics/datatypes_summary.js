// Data types are divided into two categories :-
// 1. Primitive Data types
// 2. Non-Primitive Data types

// Difference in Primitive Data types and Non-Primitive Data types is on the basis of Call by Value and Call by Reference. 

// The way the data is stored in the memory and how you can access the data stored in the memory is the basis of this differencitaion or categorisation.

// 1. Primitive Datatypes

// These are call by value data types. It is stored directly in the Stack Memory. These are typically small and fixed-sized values.

// When you copy this data type from one point to another point memory reference of original data is not given but a copied version is given so when you make changes you make changes in the copied version not in original data (memory reference).      OR

// When copied, a new copy of the primitive value is created, meaning the new variable holds an independent copy of the value. There is no shared reference between the original and the copied value. Any modifications made to the copied version do not affect the original value, as they are separate in memory.

// Immutable - once created it cannot be changed

//***  A "reference" is like an address or link that points to where something is stored in memory.

// Example explaining above concept : 
// let a = 10;
// let b = a;  // A copy of 'a' is assigned to 'b'
// b = 20;     // Changing 'b' does not affect 'a'

// console.log(a); // 10 (original value remains unchanged)
// console.log(b); // 20 (only the copy is modified)

// 7 types :  Number, String, Boolean, null, undefined, Symbol, BigInt

const score = 20
const scoreValue = 123.56

const isLoggedIn = true
const outsideTemprature = null

let useEmail;

const id = Symbol('578990')
const anotherId = Symbol('578990')

// console.log(id === anotherId)

// const bigNumber = 123456890n

// 2. Reference (Non Primitive Data types)

// These are call by reference data types also known as reference types. Non Primitive data types are objects that can store collections of data or more complex entities. These data types are stored in heap memory, and variables contain a reference (or pointer) to the location in memory where the data is stored.  

// When you assign or pass a non-primitive value (like an object or array) to another variable, you're not copying the actual data. Instead, you're copying the reference to the original data. This means both variables now point to the same memory location.

//***  A "reference" is like an address or link that points to where something is stored in memory.

// Mutable : can be changed after it is created

// Example explaining above concept :-
// let obj_1 = {name: "John", age: 24};
// let obj_2 = obj_1; // obj_2 is the reference to obj_1

// obj_2.age = 32; // changing obj_2 affects obj_1

// console.log(obj_1.age);

// types : Array, Objects, Functions

const fruits = ["apple", "grapes", "banana", "guava"];

let myself = {
    name: "faizaan",
    age: "24",
    blood_group: "B+"
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof id)

// {} - objects are defined in curly braces

// return type of fuction is called object function.ttt

// JS is statically typed or dynamically typed programming language ?

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Here Memory are of two types :-

// 1. Stack - Primitive - when a memory is defined in stack memory you get a copy of that value

// 2. Heap - Non-Primitive - when a memory is defined in the heap memory you get a reference of the original value

let myName = "FaizaanKhan"

let anotherName = myName
anotherName = "Youtube"


console.log(myName)
console.log(anotherName)

let userOne = {
    email: "faizaankhan@gmail.com",
    upi_id: "faizaan12@ybl"
}

let userTwo = userOne

userTwo.email = "joe@gmail.com"


console.log(userOne.email)
console.log(userTwo.email)