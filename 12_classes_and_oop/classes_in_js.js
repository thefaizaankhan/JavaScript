// Classes in JavaScript

// ES6 - Syntactical Sugar :)

// class is a keyword -> directly use {} -> add properties, functions

// As the object is initialized from the class or just when u use the 'new' keyword Constructor is automatically called.

// class User {
//   constructor(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword(){
//     return `${this.password}abc`
//   }

//   changeUsername(){
//     return `${this.username.toUpperCase()}`
//   }
  
// }

// const myUser = new User('faizaan234', 'faizaan222@gmail.com', '223344')

// console.log(myUser);
// console.log(myUser.encryptPassword());
// console.log(myUser.changeUsername());

// behind the scene working if 'class' was not introduced 

function User(username, email, password){
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function(){
  return `${this.password}abc`
}

User.prototype.changeUsername = function(){
  return `${this.username.toUpperCase()}`
}

const myUser = new User ('faizaan223344', 'faizaan@gmail.com', '7890')

console.log(myUser.changeUsername());
console.log(myUser.encryptPassword());

