// Object based Syntax of getting and setting properties in JS (old way)

const User = {
  _email: 'jack@gmail.com', // _ is used to make it private
  _password: 'abcd',

  get email(){
    return this._email.toUpperCase();
  },

  set email(value){
    this._email = value;
  }
}

// Object.create() is a factory function

const myUser = Object.create(User)
console.log(myUser.email);
