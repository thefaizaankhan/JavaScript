// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
    // console.log(val);
}

const greetings = "hello how are you!"
for (const greet of greetings) {
    // console.log(`Each character is ${greet}`);  
}

// **Maps - Map objects are collection of key-value pairs and remembers the original insertion order of the keys. A key in the map only occure once, it is UNIQUE in the map's collection.

const map = new Map()  // Map() constructor
map.set('name', 'Faizaan Khan')
map.set('country', 'India')
map.set('city', 'Bangalore')

// console.log(map);

// array destructure [key, value] -> so that we can get key and value of the array - shortcut** 
for (const [key, value] of map) {
    // console.log(key, ':', value);
}

// On Object
const myObject = {
    game1: 'NFS',
    game2: 'IGI',
    game3: 'PUBG',
}

// for (const [key, value] of myObject) {
//     console.log(key, ':', value);   
// }
// TypeError: myObject is not iterable -> This process doesn't work here !!!!