// Scope 

// var c = 300

// let a = 222

if(true){
    let a = 10 
    const b = 20
    var c = 30 
    // console.log("INNER: ", a)
}

// console.log(a) // a not defined -> block scope
// console.log(b) // ReferenceError: b is not defined -> block scope
console.log(c) // output: 30 

//------------------------------------------------

let x = 10 

if(true){
    x = 5
}

// console.log(x); // x is updated 

// var - global scope (less used)
// let - local scope
// const - local scope

//---------------------------------------------------

// NESTED SCOPE

function one(){
    const username = "Faizaan"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}

one()

// in Nested scope child function can access the properties of parent function but parent function cannot access the properties of child function


if (true) {
    const username = "faizaan"
    if (username === "faizaan") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


//++++++++++++++ Interesting Concept +++++++++++++++++++++

// below two are two techniques of declaring functions

// addOne(5)
function addOne(num){
    return num + 1
}


// addTwo(6) // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num){  // also known as Expression
    return num + 2
}
// declaring a function and holding it into a variable


// Stack data structure used to manage function calls.
// Hoisting in JavaScript
// Closures in JavaScript
