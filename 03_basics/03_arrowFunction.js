// 'this' is used to refer to current context (current variables or methods / values the variables are holding and methods) -> here this refers to username, price and welcomeMessage()

const user = {
    username : "Faizaan Khan",
    price : 88,
  
    welcomeMessage  : function(){
      console.log(`${this.username}, welcome to website`);
      console.log(this); 
    }
}
  
/* when we run user.welcomeMessage() in output we get :
Faizaan Khan, welcome to website
{
    username: 'Faizaan Khan',
    price: 88,
    welcomeMessage: [Function: welcomeMessage]
}
so 'this' is holding the current context of object user -> username, price and welcomeMessage() */
// user.welcomeMessage()

// user.username = "Harry"

/* again we run user.welcomeMessage() since value of username was modified to "Harry" so we get output as:
Harry, welcome to website
{
username: 'Harry',
price: 88,
welcomeMessage: [Function: welcomeMessage]
} */
// user.welcomeMessage()

// Output : {} -> empty object because we are on node environment not on the browser also in the current context which is global here there is no such object
// console.log(this);

/*------------------------------------------
In the previous time, js can only be run inside the browser the js engine was present inside the browser which executes the js was present inside the browser but nodejs / deno / bun came and it provides a environment for js to run outside the browser. 

So, In the browser the Global object is Window {} object that's why we are able to run all windows events like onclick, onsubmit and so on.

But, In the Node Environment we get {} also Global object in Node.js is global {} object.
------------------------------------------*/

// function chai(){
//   console.log(this);
// }

// chai()
/* We print 'this' in the node environment inside the function 
Output : 
<ref *1> Object [global] {
global: [Circular *1],
clearImmediate: [Function: clearImmediate],... */

// function myChai(){
//   let user = "Faizaan"
//   console.log(this.user);
// }

// output : undefined (can't use this inside the function)
// myChai()

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ES6 JavaScript - Arrow Function 

const chai = () => {
let user = "Faizaan"
console.log(this.user);
}

// chai()

// -----------------------------------------------------------

// Interview Question : What is the difference between Regular Function and Arrow Function ? 

const obj = {
name: "Faizu",
greet: function(){
    console.log(this.name); // 'Faizu'
}
}

// obj.greet() // 'Faizu'

const objArrow = {
name: "Faizal",
greet:  () => {
    console.log(this.name); // undefined (inherits `this` from the outer/global scope)
}
}

// objArrow.greet() // undefined

// one more difference

// function Person(name){
//   this.name = name;
// }

// const newPerson = new Person("Robert")
// console.log(newPerson.name);  // Robert

const Person = (name) => {
this.name = name; // Throws an error because arrow functions can't be used as constructors
}

// const newPerson = new Person("Harry") // TypeError: Person is not a constructor

// -----------------------------------------------------------------
// Arrow functions (=>) were introduced in ES6 (ECMAScript 2015) to make function syntax simpler and more expressive.

// Basic Arrow Function 
// const addTwo = (num1, num2) => {
//   return num1 + num2
// }

// console.log(addTwo(3, 7))

// Implicit Return Arrow Function
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)

// console.log(addTwo(3, 7))

// **Note : If you wrap inside {} curly braces then you must have to use return keyword but if you wrap inside () parenthesis then no need to use return keyword. This technique is very extensively used in React.js.

// Returning an object (Implicit Return):
const addTwo = (num1, num2) =>  ({username : "Faizaan"})
// console.log(addTwo(3, 7))

// Single Parameter, Single Expression (Implicit Return):
const square = x => x * x;
// console.log(square(4)); // Output: 16

// OR

// Multiple Parameters (Implicit Return):
const add = (a, b) => a + b;
// console.log(add(3, 7)); // Output: 10

// OR

// No Parameters (Implicit Return):
const greet = () => "hello good morning!";
// console.log(greet());  // Output: Hello, World!


// Multiple Statements (Explicit Return): If the function body contains more than one statement, you must use curly braces {} and explicitly use return. Here two statements are : console.log('Multiplying:', a, b); and return a * b;

// If a function body includes more than one action, each separated by a semicolon (;), it contains multiple statements.

const multiplyAndLog = (a, b) => {
    // console.log('Multiplying:', a, b);
    return a * b; // Explicit return
};
// console.log(multiplyAndLog(3, 5)); // Output: 15

