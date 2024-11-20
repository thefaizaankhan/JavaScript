const accountId = 8989
let accountEmail = "faizaankhan7701@gmail.com"
var accountPassword = "12345"
accountCity = "Jabalpur"
let accountState


// accountId = 3 // it is not allowed

accountEmail = "faizu@gmail.com"
accountPassword = "09876"
accountCity = "Bombay" // variable can also be declared like this but this is not a preferred practice. Just to remember.
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

//+++++++++++++++++++++++++++++++++++++++++++++++++++

// Hoisting - Hoisting is a JavaScript behavior where the declarations of variables, functions, and classes are moved to the top of their scope (global or block) during the compilation phase, even before the code is executed. This allows you to use variables and functions before they are declared in your code. Only declarations are moved not the values.

// - For variables declared with var, they are initialized with undefined.
// -  For let, const, and class, they are hoisted but not initialized. Accessing them before their declaration results in a ReferenceError.
// - Function declarations are fully hoisted, meaning you can call them before they are defined.

//----------------------------

// 1. Hoisting with var
// When you declare a variable with var, it is hoisted to the top of its scope and initialized to undefined.

console.log(a); // undefined
var a = 10;
console.log(a); // 10

// What happens behind the scenes:

var a;         // Declaration is hoisted
console.log(a); // undefined (initialized to `undefined`)
a = 10;        // Assignment happens here
console.log(a); // 10

//--------------------------

// 2. Hoisting with let and const
// Variables declared with let or const are hoisted, but they are not initialized. They remain in the Temporal Dead Zone (TDZ) until their declaration is encountered in the code.

console.log(d); // ReferenceError: Cannot access 'd' before initialization
let d = 20;
console.log(d); // 20

// What happens behind the scenes:

// let d;          Declaration is hoisted
// d is in TDZ
console.log(d); // Error
d = 20;         // Initialization
console.log(d); // 20

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1. Declaration, Initialization and Assignment

// Declaration : Declaring a variable or function means reserving a name in memory so you can use it later.
// Does it assign a value? No, it just introduces the variable or function into the program.
// Example (Variable Declaration):

var x; // Declares a variable `x`
let y; // Declares a variable `y`

// Example (Function Declaration):

// function greet() {
//     console.log("Hello!");
// } 
// Declares a function named `greet`

//-------------------------------

// 2. Initialization
// What it means: Initialization is when a variable is given a value at the time of declaration.
// Does it always happen? No, variables can be declared without being initialized.

// Example (Variable Initialization):

var a = 10; // Declaration and initialization together
let b = 20; // Declaration and initialization together

// Example (No Initialization):

var z; // Declared but not initialized
console.log(z); // undefined

//-----------------------------------

// 3. Assignment: Assignment is when a value is given to a variable after it has been declared. This can happen multiple times.
// Does it create a variable? No, the variable must already be declared.
// Example (Assignment):

var x; // Declaration
x = 5; // Assignment
x = 15; // Re-assignment
