// Objects 

// There are two ways of declaring an Object :-
// 1. Constructor 
// 2. Literal
// **Singleton - it is always made out of constructors not with literals is a unique object of its own

// Object.create - called as creating object through Constructor method -> in this way singleton is created

// Object Literals

// declaring a Symbol 
const mySymbol = Symbol("key1");

// object in key and value pairs -> in key-value pair lets say age: 18 -> age is by default "age" -> system process it as a string by default
const JsUser = {
    name: "Faizaan",
    "full name": "Faizaan Khan",
    [mySymbol] : "key1", // declaring symbol in []
    age: 18,
    location: "Bangalore",
    username: "faizaankhan123",
    email: "faizaankhan@gmail.com",
    mobileNumber: 8989777701,
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday", "Sunday"]
}

// console.log(JsUser.age);  
// console.log(JsUser[age]); // error ReferenceError : age is not defined
// console.log(JsUser.full name); // error
// console.log(JsUser["full name"]); 
// console.log(JsUser["age"]);

//** Interview Ques - Create a symbol declare it in the object and access the symbol and print the output. 
// console.log(JsUser[mySymbol]); // accessing the symbol in object
// console.log(typeof mySymbol); // type : symbol 
// console.log(typeof JsUser[mySymbol]); // type : string

// JsUser.email = "faizu123@gmail.com" // changing the email 
// Object.freeze(JsUser)
// JsUser.email = "bhai@gmail.com" // changing the email after freeze -> changes will not propagate
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    // accessing the properties of current object JsUser{} using this keyword (used to reference same object)
    console.log(`Hello Js User, ${this.name}`);
}

// console.log(JsUser.greeting); // output : [Function (anonymous)] -> We got a Function returned back -> Function is not executed yet but we got a reference of function 
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
// in output also in browser sometimes we get value along undefined

//** Generally we access values of object using .(dot) like (JsUser.name) but there are cases when we can only access the values using [] like (JsUser[mySymbol]) 









