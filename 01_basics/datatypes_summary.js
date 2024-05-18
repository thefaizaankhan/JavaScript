// Data types are divided into two categories :-
// 1. Primitive Data types
// 2. Non-Primitive Data types

// Difference in Primitive Data types and Non-Primitive Data types is on the basis of Call by Value and Call by Reference. 

// The way the data is stored in the memory and how you can access the data stored in the memory is the basis of this differencitaion or categorisation.

// 1. Primitive Datatypes

// These are call by value data types. When you copy this data type from one point to another point memory reference of original data is not given but a copied version is given so when you make changes you make changes in the copied version original data (memory reference).

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

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

// 1. Stack - Primitive

// 2. Heap - Non-Primitive

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