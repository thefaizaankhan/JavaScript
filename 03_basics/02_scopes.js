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
// Lexical scoping ensures that child functions can access variables from their parent functions but not vice versa.

/* How JavaScript Executes the Code ?

1. Two Phases of JavaScript Execution
JavaScript uses the Execution Context Model, which consists of:
Creation Phase (Memory Allocation):
During this phase, the engine allocates memory for variables and functions. It doesn't execute the code but sets up everything in memory.
Execution Phase:
The engine runs the code line by line, resolving variables and executing functions.
2. Global Execution Context
The JavaScript engine starts by creating a Global Execution Context, which consists of:
Global Memory: Where global variables and function declarations are stored.
Global Scope: The global lexical environment where all variables are accessible unless shadowed. 

JavaScript first prepares the code (creation phase) and then executes it (execution phase) while managing scopes and memory via the Global Execution Context.*/
