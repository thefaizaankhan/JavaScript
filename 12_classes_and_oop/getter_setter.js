//  Getter and Setter in JS

// getters and setters are special methods that allow you to define custom logic when retrieving (get) or setting (set) the value of a property in an object. They provide controlled access to object properties.

class User {
  constructor(email, password){
    this.email = email,
    this.password = password
  }

  // Getter
  get password(){
    // return this.password.toUpperCase(); 
    return this._password.toUpperCase(); // To avoid infinite loop in setter and _password is private
  }

  // Setter
  set password(value){
    // this.password = value; // RangeError: Maximum call stack size exceeded
    this._password = value;
  }

  get email(){
    return this._email.toUpperCase(); // _ is used to make it private
  }

  set email(value){
    this._email = value; // 'return' is not required in setter
  }

}

const faizaan = new User("faizaan@gmail.com", "abcd")
// console.log(faizaan.password);
console.log(faizaan.email);

// If you define getter you must define setter also

// Rare Error : RangeError: Maximum call stack size exceeded => coz of infinite loop in setter => constructor is also setting the value of password and setter is also setting the value of password. So, it is going in infinite loop. So, we need to change the name of the password in setter.