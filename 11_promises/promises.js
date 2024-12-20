// Promises are a way to handle asynchronous operations. The Promise OBJECT represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It represents a value which may be available now, or in the future, or never.

// Promise cannot be completed right now it will execute after some time. It is completed in future.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// Reference (BlueBird Library): https://stackoverflow.com/questions/34960886/are-there-still-reasons-to-use-promise-libraries-like-q-or-bluebird-now-that-we

// Reference : https://blog.kuzzle.io/bluebird-vs-native-vs-async/await-state-of-promises-performances-in-2019#:~:text=Node.,-js%2010&text=With%20this%20upgrade%2C%20we%20wanted,able%20to%20do%20without%20Bluebird.&text=We%20can%20see%20that%20even,promises%20managed%20with%20async%2Fawait.

// creation of promise
const promiseOne = new Promise(function(resolve, reject) {
  // do an async task
  // DB Calls, Cryptography, network calls
  setTimeout(function() {
    console.log('Async Task is completed');  
  }, 1000)
})

// consumption of promise
// resolve is connected to .then() -> values of async task is returned to .then()
promiseOne.then(function(){
  console.log('Promise consumed');
})

// Execute the code in browser console :
// > Async Task is completed

// But ''Promise consumed'' is not printed because the promise is not resolved. It is in pending state. So, we need to resolve the promise by connecting resolve() to the async task by calling resolve() inside the async task.

// const promiseOne = new Promise (function (resolve, reject) {
//   setTimeout(function () {
//     console.log('Async Task is completed');
//     resolve();
//   }, 1000)
// })

// promiseOne.then(function() {
//   console.log('Promise consumed');  
// })

// sometimes it is not necessary to store promise in a variable. We can directly chain the promise with .then() method.
new Promise (function (resolve, reject) {
  setTimeout(function(){
    console.log('Async Task 2');
    resolve();
  }, 1000)
}).then(function() {
  console.log('Async 2 resolved');
})

// passing data through resolve() -> passing a data (object) as parameter via resolve() -> .then() takes 'user' as parameter and passes the data  
const promiseThree = new Promise(function(resolve, reject) {
  setTimeout(function(){
    resolve({username: "faizaankhan", email: "faizaankhan@gmail.com"})
  }, 1000)
})

promiseThree.then(function(user){
  console.log(user);
})

// Refer to http://callbackhell.com/
// if accessing files via web request then resolving the errors
const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = true  // we have errors (toggle it)
    if (!error) {
      resolve({username: "Faizaan", password: "12345"})
    } else {
      reject('ERROR: Something went wrong')
    }
  }, 1000)
})

// promiseFour.then().catch(for errors) (why???)
// avoiding the callback hell with the help of Chaining
// finally() is just like default it is executed always
promiseFour
.then((user) => {
  console.log(user);
  return user.username
})
.then((myUsername) => {
  console.log(myUsername);
})
.catch((error) => {
  console.log(error);
})
.finally(() => {
  console.log("The promise is either resolved or rejected");
})

// handling errors with async (we don't handle gracefully catch() here) - async await don't handle errors directly
// Remember promise is not an object so we don't consume it as promiseFive() -> wrong apporach 
const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = false  // we have errors (toggle it)
    if (!error) {
      resolve({username: "javascript", password: "123"})
    } else {
      reject('ERROR: JS went wrong')
    }
  }, 1000)
})

async function consumePromiseFive() {
  try {
    const response = await promiseFive
    console.log(response);
  } catch (error) {
    console.log(error); 
  }
}

// consumePromiseFive()

// Refer to : https://jsonplaceholder.typicode.com/users
async function getAllUsers() {
  try {
    const response = await(fetch('https://jsonplaceholder.typicode.com/users'))    
    const data = await response.json()  // converting data from string to json also adding 'await' because many opearations take time like fetching data or database call or network call same as here converting response into json data takes time so we add 'await'
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}
    
// getAllUsers()

// doing above function in the form of .then().catch() format
// thenable
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
  return response.json()  // here i got the data
})
.then((data) => {
  console.log(data);  // handling response.json
})
.catch((error) => console.log(error)) // handling the error

// as we execute above function on the console we see that output of above written promises should come at top and this fetch() result should come at the least or at the last but it is not. Let's see why ? 

// Refer to Async Event Loop Diagram - fetch() is executed first even before setTimeout() and setInterval() because specially for fetch() a unique Micro Task Queue (Priority Queue) is made of highest priority. Callback in this priority queue holds the highest priority it will be executed first. 

// Refer to working_of_fetch.png image (for how fetch() works behind the scenes)

// Refer to : https://dev.to/logrocket/the-fetch-api-is-finally-coming-to-nodejs-foe?comments_sort=oldest

// Refer to : https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/fetch
