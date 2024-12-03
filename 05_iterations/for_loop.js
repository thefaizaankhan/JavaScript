// for loop

// for(let i = 1; i <= 10; i++){
//     console.log(i); // prints from 1 to 10
// }

// i or j is called loop counter

// In for loop here, index variable is initialized only once as let index = 0; so when the loop starts executing lets say it starts executing from 0 -> now at index < 10 it will check the condition this will 0 < 10 if this is true -> const element will now hold the value 0 -> value 0 prints as output and just before the end of scope it goes back to index++ and 0 incremented to 1 -> now again the conditional check if 1 < 10 if this is true -> const element will hold the value 1 -> 1 is printed as output -> again 1 is incremented to 2 -> again conditional check and this process repeats until 10 < 10 which is false the loop terminates and values are printed from 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

// at index++ 0 will be incremented to 1 -> 
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }

// **Shortcut: Ctrl + D to select duplicate words

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("Number 5 is best number");
//     }
//     console.log(element);
// }

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value : ${j} and inner loop value: ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`); //or
        // console.log(i + ' * ' + j + ' = ' + i*j);
    }
}

let myArray = ["flash", "batman", "superman", "spiderman"]

for (let index = 0; index <= myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);    
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("Number 5 is detected");
//         break
//     }
//     console.log(`Value of i is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Number 5 is detected");
        continue
    }
    console.log(`Value of i is ${index}`);
}
