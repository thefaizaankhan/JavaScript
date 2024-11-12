const name = "Faizaan"
const repoCount = 50

// Older way of concatenating the string
// console.log(name + repoCount + " Value");

// Modern way of concatenating the string more readable more reliable
// String Interpolation -> using ${} -> enclosed with in ``(backticks)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//One more way to initialize string : using an object
const gameName = new String('vicecity')

// if we console gameName in browser -> String {'vicecity'} -> is an object not an array -> in the form of key value pairs.

// console.log(gameName)

// console.log(gameName[0]) // outputs: v

// console.log(gameName.__proto__) // outputs: {} protype of an object

// console.log(gameName.length)

// console.log(gameName.toUpperCase())

// console.log(gameName.charAt(3)); // outputs : e

// console.log(gameName.indexOf('t')) // outputs : 6



