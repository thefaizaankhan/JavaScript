// Inheritance in JavaScript

class User {
  constructor(username){
    this.username = username;
  }

  logMe(){
    console.log(`Username is ${this.username}`);
  }
}

// to inherit the properties of User using 'extends' (.prototype in old times)
class Teacher extends User {
  constructor(username, email, password){
    super(username) // to access the username of User class
    this.email = email;
    this.password = password
  }

  addCourse(){
    console.log(`A new course was added by ${this.username}`);
  }
}

// making an object of Teacher class
const myUser = new Teacher('John', 'john22@gmail.com', '889900')

myUser.addCourse();

// making an object of User class
const oldUser = new User('Harry');

oldUser.logMe();

// oldUser.addCourse(); // this will give an error as addCourse is a method of Teacher class and not of User class

myUser.logMe(); // this will give the username of Teacher class (inherited from User class)

// console.log(myUser === oldUser); // false

// console.log(myUser === Teacher); // false

// console.log(myUser instanceof User); // true
// console.log(myUser instanceof Teacher); // true


// behind the scenes of 'super' keyword - what it do is it takes the properties of the parent class and then we can use them in the child class. It automatically takes 'this' keyword along with itself and set it with the property of the parent class and then we can use the properties of the parent class in the child class. 