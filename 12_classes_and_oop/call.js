// Call in JavaScript 
// When React version 1 was published devs bind and call very extensively

// Call Stack -> Global Execution Context -> Refer to image call.png 

function SetUsername(username) {
  // Complex DB Calls
  this.username = username
  console.log("this method is called");
}

function createUser(username, email, password){
  // SetUsername(username)  // reference is given but not called
  SetUsername.call(this, username)
  this.email = email
  this.password = password
}

const myUser = new createUser('faizaan', 'faizaan@gmail.com', '1122')

console.log(myUser);

// Output : createUser { email: 'faizaan@gmail.com', password: '1122' }
// But where is username property ??

// SetUsername.call(this, username) -> this is the first parameter you can give -> .call() give the current execution of the context to another function

// as per the memory perspective in the call stack Global EC is loaded then createUser() is called -> EC of function createUser() is loaded then SetUsername() is called -> EC of SetUsername() is loaded. Now, as the execution starts SetUsername() is executed and its EC is removed with this the variables, declarations and memory it was holding is also removed from the call stack it doesn't reached to the function createUser() -> so we need to hold the data of SetUsername() so that it can be passed to createUser().

// Now to hold the referece we use .call() method with the current EC of SetUsername() as -> .call(this, username)