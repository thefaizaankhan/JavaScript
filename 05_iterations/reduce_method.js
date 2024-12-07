// reduce()

// Reduce() - The reduce method in JavaScript is used to reduce an array to a single value by applying a function that processes each element of the array iteratively. 

// reduce() does not modify the original array

// Always provide an initial value if possible.

// acc - Accumulator (The accumulated result from the previous iteration.)
// currval - Current Value (The current array element being processed.)
// intial value = 0 (The initial value for the accumulator. If not provided, the first element of the array is used as the accumulator, and the iteration starts from the second element.)

const myFavNums = [1, 2, 3, 4, 5, 6]

// const myTotal = myFavNums.reduce(function (acc, currval) {
//   console.log(`acc : ${acc} and currval : ${currval}`);
//   return acc + currval
// }, 0)
// console.log(myTotal);

/*
Working :-
1. Start with accumulator = 0 (initial value).
2. Add the first element (1): 0 + 1 = 1.
3. Add the next element (2): 1 + 2 = 3.
4. Add the next element (3): 3 + 3 = 6.
5. Add the next element (4): 6 + 4 = 10.
6. Continue until the array is fully processed.
7. Final result is 21.
*/

// OR

// const total = myFavNums.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// }, 0)

// console.log(total)

// OR 
//(Arrow Function)

const myTotal = myFavNums.reduce((acc, currval) => acc + currval, 0)
// console.log(myTotal);

const shoppingCart = [
  {
    itemName: 'JavaScript Course',
    price: 2899
  },
  {
    itemName: 'Python Course',
    price: 1999
  },
  {
    itemName: 'Mobile Development Course',
    price: 5899
  },
  {
    itemName: 'Data Science Course',
    price: 10800
  },
  {
    itemName: 'Machine Learning Course',
    price: 12890
  },
]

const myCart = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(myCart);


//-------------------------------------------------------

// What is a callback function ?

// A callback function is a function passed as an argument to another function and is executed after the completion of that function.

// It allows for asynchronous or deferred execution and is widely used in JavaScript for handling events, asynchronous operations, or custom logic within a function.

function greet(name, callback) {
  // console.log(`Hello, ${name}`);
  callback();
}

function sayGoodbye() {
  // console.log("Goodbye!");
}

// greet("harry", sayGoodbye);

// Output:
// Hello, harry
// Goodbye!

//-------------------------------------------------------