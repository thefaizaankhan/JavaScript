// Scope 

// var c = 300

let a = 222

if(true){
    let a = 10 
    const b = 20
    var c = 30 
}

// console.log(a) // a not defined -> block scope
// console.log(b) // b not defined -> block scope
console.log(c) // output: 30 

//------------------------------------------------

let x = 10 

if(true){
    x = 5
}

console.log(x);

// var - global scope (less used)
// let - local scope
// const - local scope