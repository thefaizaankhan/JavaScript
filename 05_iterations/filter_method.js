// Filter()

const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item
// })
// console.log(values); // undefined

// we got output as 'undefined' along with values -> for each loop doesn't return a value


// The filter method accepts a callback function. Unlike forEach, which does not return a value, filter returns a new array containing elements that satisfy the condition.
// 'num' is the parameter representing each element in the array.
// In the callback function, if the condition evaluates to true, the element is included in the returned array; otherwise, it is excluded.

// Functions like those used with filter(), map(), etc., often require a return value to work properly.

// Always ensure the callback must returns a value; true (include the element) or false (exclude the element)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => num > 4)  // Implicit return
// console.log(newNums);  // output : [ 5, 6, 7, 8, 9, 10 ]

// If you use curly braces {} -> scope is open -> but omit return, the function implicitly returns undefined.

// const newNums = myNums.filter((num) => {
//    return num > 4  // Explicit return
// })
// console.log(newNums)

// OR

// Using ForEach Loop
// const newNums = []

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const books = [
    {title: 'Book One', genre: 'History', publish: 1999, edition: 2023},
    {title: 'Book Two', genre: 'Maths', publish: 1980, edition: 2022},
    {title: 'Book Three', genre: 'GK', publish: 1969, edition: 2018},
    {title: 'Book Four', genre: 'Science', publish: 1989, edition: 2014},
    {title: 'Book Five', genre: 'Geography', publish: 1909, edition: 2012},
    {title: 'Book Six', genre: 'Fictional', publish: 1998, edition: 2013},
    {title: 'Book Seven', genre: 'Non-Fictional', publish: 2003, edition: 2007},
    {title: 'Book Eight', genre: 'Fictional', publish: 2006, edition: 2010},
    {title: 'Book Nine', genre: 'Science', publish: 1988, edition: 2020},
    {title: 'Book Ten', genre: 'Non-Fictional', publish: 1981, edition: 2021},
]

// const userBooks = books.filter((bk) => bk.genre === 'History')
const userBooks = books.filter((bk) => {
    return bk.publish >= 1999 && bk.genre === 'History'
})

console.log(userBooks);



//------------------------------------------------
// Example - The following example returns all prime numbers in the array:

const array = [0,1,2,0,0,0,0];

function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

// console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
//------------------------------------------------


