const name = "Faizaan"
const repoCount = 50

// Older way of concatenating the string
// console.log(name + repoCount + " Value");

// Modern way of concatenating the string more readable more reliable
// String Interpolation -> using ${} -> enclosed with in ``(backticks) and declare placeholders
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//One more way to initialize string : using an object
const gameName = new String('vicecity-game')

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Here there are two types of Strings :-
// 1. Primitive String : When you create string literals using "text" or 'text'.

// const name = "faizaan khan"

// The typeof name here would be 'string'.

// 2. Object String : When you use new String() constructor.

// const name = new String("faizaa khan")

// The typeof name in this case would be 'object' because new String() creates an instance of the String object, which is a wrapper around the primitive string.

// Why it happens? 

// The String constructor, when used with new, creates a boxed object that wraps the primitive string. This wrapper provides methods and properties that can be used on the string, such as .length and various string methods.

// Primitive strings in JavaScript are immutable and have no properties or methods on their own, but JavaScript automatically wraps them with a String object temporarily when you call a method (e.g., .toUpperCase()).

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// if we console gameName in browser -> String {'vicecity'} -> is an object not an array -> in the form of key value pairs.

// console.log(gameName)

// console.log(gameName[0]) // outputs: v

// console.log(gameName.__proto__) // outputs: {} protype of an object

// console.log(gameName.length)

// console.log(gameName.toUpperCase())

// console.log(gameName.charAt(3));

// console.log(gameName.indexOf('t'))

// console.log(gameName.slice(2, 8));

// console.log(gameName.slice(-13, 2));

// console.log(gameName.substring(0,5)); 

const newStringOne = "   faizaan     ";

// console.log(newStringOne)
// console.log(newStringOne.trim())

const url = "https://github.com/the%20faizaan%30khan%"

// console.log(url.replace('%20', '-'))

// console.log(url.replace('%20', '-').replace('%30', '-').replace('%', ''))

// console.log(url.includes('bhai'))

console.log(gameName.split('-'))








