const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// it is pushes in the existing array
// marvel_heros.push(dc_heros) 
// here marvel_heros array takes the dc_heros array as an element -> here 3rd element is the whole array
// console.log(marvel_heros);
// console.log(marvel_heros[3][1])

// concat() Method
// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// Spread Operator(...) -> Spread Method
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

// push() with Spread Operator
// marvel_heros.push(...dc_heros)
// console.log(marvel_heros);

// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = anotherArray.flat(Infinity) // trick
// console.log(real_another_array);

// these used specially when we are doing web scraping we want data only in the array format whether data is in the nodelist, objects, string

console.log(Array.isArray("Faizaan")) // false
console.log(typeof Array.isArray("Faizaan")) // bool

// converting it to array using from()
console.log(Array.from("Faizaan"))
console.log(typeof Array.from("Faizaan")) // object

console.log(typeof Array.from({ name: "Faizaan" })) // interesting** - object is not iteratable

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

// An Iteratable object is an object which can be looped over it. ex.- Strings, Sets, Maps, NodeList

// In js Array Global object and Array instance object have different methods associated with them.

//-----------------------------------------------------

// 1. Methods of the Array Global Object

// The Array global object provides static methods, which means they are called directly on the Array object itself (e.g., Array.isArray()), not on individual array instances.

// Ex.- Array.isArray(obj) - Checks if a given value is an array.
// Array.from(arrayLike, [mapFn], [thisArg]) - Converts an array-like or iterable object into an array.
// Array.of(...elements) - Creates a new array from its arguments, regardless of their number or type.
// Array() - Constructor to create new arrays.

//--------------------------------------------------------

// 2. Methods of the Array Instance Object

// The Array instance object refers to arrays you create using [] or new Array(). These methods are available on all arrays and are used to manipulate, access, or traverse array elements.

// Ex.- map(callback, [thisArg]) - Transforms each element based on the callback function.
// find(callback, [thisArg]) - Returns the first element that satisfies the callback.
// includes(value, [fromIndex]) - Checks if the array includes a certain value.
// push(...elements) - Adds one or more elements to the end of the array.
// pop() - Removes and returns the last element of the array.
// shift() - Removes and returns the first element of the array.
// unshift(...elements) - Adds one or more elements to the beginning of the array.
// splice(start, deleteCount, ...items) - Adds, removes, or replaces elements in an array.
// join(separator) - Joins all elements into a string.
// concat(...arrays) - Merges arrays.
// slice(start, end) -Returns a portion of the array.
// reverse() - Reverses the array in place.
// flat(depth) - Flattens nested arrays.