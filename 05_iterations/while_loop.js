// while loop

// let i = 1;
// while (i <= 10) {
//     console.log(i); // prints from 1 to 10
//     i++;
// }

// let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index += 2  // index = index + 2
// }

let myArray = ['flash', 'batman', 'superman', 'hulk']

let arr = 0;
while (arr < myArray.length) {
    // console.log(`Superhero is ${myArray[arr]}`);
    arr = arr + 1;
}

// Do-While Loop
// code execution is done before and condition is checked after

let score = 1

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);