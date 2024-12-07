// Map()

// Used to create a new array by applying a callback function. It always returns a new array and it does not modify the original array.

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map((num) => {return num + 100})

// console.log(newNums);

// using foreach loop
// myNumbers.forEach((num, index) => myNumbers[index] = num + 100)  // OR
// myNumbers.forEach((num, index, array) => array[index] = num + 100)  // OR

// const newNums = []
// myNumbers.forEach((num) => newNums.push(num + 100))
// console.log(newNums);

//-------------------------------

// Chaining

// yes we can add or chain multiple(2 to 3) map() or filter() to perform an operation on an array.

// In Chaining the value in the first method will be passed to the second method.

const myNewNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNewNumbers
              .map((num) => num * 10)
              // here value in the 'num' will never be 1; instead value in the 'num' will be the value passed through the method just before this method -> here in the second statement .map((num) => num + 1) -> num will hold the value of .map((num) => num * 10).
              // here in the first .map() method we have already done multiplication -> these modified values of the array will be passed to second .map() method and -> +1 will be added to the modified values
              .map((num) => num + 1)
              .filter((num) => num >= 40)

// console.log(newNums);

// map() returns the value but you have to return the value explicitly but filter() always return a value 


