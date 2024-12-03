// for...each loop
// this is a higher order function 
// callbackfn - give a call back function for work

const coding = ['js', 'cpp', 'py', 'java']

// callback function doesn't have a function name 
// since it is executing on the array so it iterates over each value of the array and for each iteration it automatically passes the value of the array through the parameter -> here during each iteration 'item' parameter hold the current element

// 'item' is the call back function's parameter

// coding.forEach(function (item) {
//     console.log(item);
// })


// for...each through Arrow Function

// coding.forEach((item) => {
//     console.log(item);
// })


function printMe(item){
    // console.log(item);
}

// coding.forEach(printMe)
// here we are giving reference of the function -> printMe, we are not executing the function -> printMe()

// parameters of forEach loop
// coding.forEach((item, index, array) => {
//     console.log(item, index, array);
// })


// **Imp
const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})