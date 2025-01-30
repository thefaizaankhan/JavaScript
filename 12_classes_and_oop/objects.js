// Prototypes in JavaScript 

// In JavaScript, prototypes are a fundamental feature that enables object inheritance. Every JavaScript object has an internal property called [[Prototype]] that links to another object or null. This mechanism is used to share properties and methods between objects.

/* 
How Prototypes Work :-

1. Prototype Chain: When you try to access a property or method on an object, JavaScript first looks for it on the object itself. If it's not found, it looks up the [[Prototype]] chain until it finds the property or reaches null.

2. Prototype Property: In functions (used as constructors), there is a property called prototype. This property is used to assign methods or properties that will be shared across all instances created by that constructor
*/ 

// Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

// he property of an object that points to its prototype is not called prototype. Its name is not standard, but in practice all browsers use __proto__. The standard way to access an object's prototype is the Object.getPrototypeOf() method.

// When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.

// Default behaviour of JavaScript is Prototypal Behaviour which means JS goes to top on top on top if it doesn't find the value or result which you were expecting or you can say JS goes up and up and up layers by layers -> it doesn't give up untill it gets 'null' value. Due to this Prototypal Behaviour we get access or working of new keyword, this keyword, classes and prototypal inheritance or inheritance. We don't get access of 'this' keyword in Arrow Functions (() => {}) bcoz of Prototypes.

// open browser concole type and see the properties -> myArr = ['hulk', 'ironman'] -> myArr -> [[Prototype]]: Array(0) -> [[Prototype]]: Object -> get __proto__: ƒ __proto__() & set __proto__: ƒ __proto__() (We can see the [[Prototype]] : Object is not visible on moving deeper)


function multiplyBy5(num){
  return num * 5;
}

multiplyBy5.power = 2   // does function is an object ?

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

// Outuput:
// 25
// 2
// {} (Every function in JavaScript automatically has a prototype property, which is used in the context of object inheritance (e.g., when the function is used as a constructor).Initially, the prototype property is an empty object ({}) by default.Since multiplyBy5 is not used as a constructor here, its prototype remains untouched and is displayed as an empty object. It stores current context of this.)

// So, here we understand the in JavaScript function is a function also function is an object. Why? bcoz remember prototypal behaviour of js it goes up and up following the prototypal inheritance it takes array or function to the object.(refer to js_object.png)

// console.log(multiplyBy5.prototype); -> {} -> empty object -> because multiplyBy5 is a function and not an object -> so, it does not have prototype property -> it is only available for objects -> so, we have to use 'new' keyword to create an object -> then we can use prototype property -> it is a reference to the object -> it is a reference to the object's prototype property.

// Adding functionality in the function of my own which i want
function createUser(username, score){
  this.username = username;
  this.score = score;
}

// by using .prototype
createUser.prototype.increment = function(){
  this.score++; // how will the createUser() know which value to increment 30 or 300 or to whose value should I increase that's why adding 'this' so that it gets the current context
}

createUser.prototype.printMe = function(){
  console.log(`Price is : ${this.score}`);  // whose score to show 'chai' or 'tea' that's why added 'this' for -> chai -> jisne bhi score pucha hai uska score bta do
}

// this = jisne bhi call kiya hai uska reference -> this.score = jisne bhi bulaya ho uska score

// const chai = createUser("chai", 30) 
// const tea = createUser("tea", 300)
// adding new keyword

const chai =  new createUser("chai", 30)  // adding 'new' keyword so that 'chai' variable gets to know that createUser() has properties of this
const tea =  createUser("tea", 300)

// chai.prototype.printMe() -> chai.printMe()
chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/