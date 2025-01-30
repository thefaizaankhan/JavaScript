// Static Properties (Static Props)

class User {
  constructor(username){
    this.username = username;
  }

  logMe(){
    console.log(`Username is ${this.username}`);
  }

  // static method
  static createId(){
    return `123`
  }
}

const faizaan = new User('faizaan')
// console.log(faizaan.createId()); // this will give an error as createId is a static method and not an instance method

// sometimes we dont't want every object which is instantiated from the class gets access to a particular property or method. So, we can use 'static' keyword to make a property or method static.

class Teacher extends User {
  constructor(username, email){
    super(username) // to access the username of User class
    this.email = email;
  }
}

const firstUser = new Teacher('harry12', 'harry@gmail.com')

firstUser.logMe();  // Username is harry12

console.log(firstUser.createId()); // this will give an error as createId is a static method and not an instance method

