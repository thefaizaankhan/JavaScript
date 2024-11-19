// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString);
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// Checking the type of Date -> object 
console.log(typeof myDate)

// Remember in JS months starts from 0 
let myCreateDate = new Date(2024, 0, 2)
// console.log(myCreateDate.toDateString());

// to get the date and time as hour and minutes
let myCreateDateTwo = new Date(2024, 2, 23, 3, 33)
// console.log(myCreateDateTwo.toLocaleString());

// in mm-dd-yy or yy-dd-mm formate month starts from 1
let myCreateDateThree = new Date("11-20-2024")
// console.log(myCreateDateThree.toLocaleString());

// Time Stamps in Dates
let myTimeStamp = Date.now();
console.log(myTimeStamp); 
// output : 1732044334977 (these are milliseconds)
console.log(myCreateDateThree.getTime())
// asked in interviews that convet this milliseconds into seconds
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getMonth()) // remember it starts from 0
console.log(newDate.getDay() + 1) // remember it starts from 0


// console.log(`Today's Date is ${newDate.getDate() + 1} and time is ${newDate.getTime()}.`)

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}))









