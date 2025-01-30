// old way of getting and setting properties in JS

// Function Based Syntax
function User(email, password){
  this._email = email;  // _ is used to make it private
  this._password = password;

  Object.defineProperty(this, 'email', {
    get: function(){
      return this._email.toUpperCase();
    },
    set: function(value){
      this._email = value
    }
  })

  Object.defineProperty(this, 'password', {
    get: function(){
      return this._password.toUpperCase();
    },
    set: function(value){
      this._password = value
    }
  })
}

const newUser = new User("jimmy22@gmail.com", "abbbddcc")
console.log(newUser.email);
