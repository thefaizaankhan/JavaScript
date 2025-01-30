// Object Literal - this is considered as basic unit in JavaScript
const user = {
  username: "Faizaan Khan", // these are properties
  loginCount: 0,
  signedIn: true,

  getUserDetails: function(){
    // console.log("Got user from DB");
    console.log(`Username is : ${this.username}`);
    console.log(this);  // current context -> user object
  }
}
// 'user' is object here
// console.log(user);
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);  // {}

// go to browser and type -> let myArray = [1, 2, 3] in console and see the properties, methods and prototypes.

// this refer to current context 

// console.log(this); -> {} -> no value in GLOBAL CONTEXT (in Node.js) (but this value is changing)

// but on browser console console.log(this); -> Window {window: Window, self: Window,...} -> we get Window Object which is a GLOBAL OBJECT

// -------------------------------------------------------------

// Constructor Function

// const promiseOne = new Promise()
// const date = new Date()

// 'new' -> it is a Constructor Function -> it allows you to create multiple instances from an object literal

// here 'this.username' is the variable and 'username' is the value which we are passing 
function jUser(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greetings = function(){
    console.log(`Welcome ${this.username}`);
  }

  return this; // returning the object (it is default and defined implicitly)
}

// const userOne = User("Faizaan", 10, true)
// const userTwo = User("Harry", 8, false)  // overrites the value of userOne even if we do not print userTwo
// console.log(userOne);

// This will be a nightmare for programmers. So, Constructor Function gives you a new instance or copy, and original is not affected.

const userOne = new User("Faizaan", 10, true)
const userTwo =  new User("Harry", 8, false)

console.log(userOne);
console.log(userTwo);


// 1.  when we use 'new' keyword a new object is created called as instance
// 2.  Constructor Function is called bcoz of new keyword -> it packs the arguments and give it to the function 
// 3. arguments are injected in 'this' keyword
// 4. we get the result inside the function 

// it the reference of the function (here is the referece of User function)
// console.log(userOne.constructor); // it is reference of itself
// console.log(userTwo.constructor);

// console.log(userOne instanceof User); // true

//-----------------------------------------------------

// Anonymous functions are functions without a name, and they are common in situations where you don't need to reuse the function.
// example :- 
// this.greetings = function() {
//   console.log(`Welcome ${this.username}`);
// }





 




