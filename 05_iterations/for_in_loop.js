// for...in loop (**objects)

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for...in loop (specially for iterating over objects)

for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
    // console.log(myObject[key]);
}
// myObject[key] dynamically access the value of the key


// On Array (Arrays also have keys)
const programming = ['js', 'py', 'cpp']

for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}
// **Here is the difference between for...in loop and for...of loop -> in forin loop on printing key we  get keys of array as (0, 1, 2) but in forof loop we get the values of array.


// On Map
const map1 = new Map()  // Map() constructor
map1.set('sport1', 'Football')
map1.set('sport2', 'Cricket')
map1.set('sport3', 'Chess')

// console.log(map1);

// for (const [key, value] in map1) {
//     console.log(key, ':', value);
// }
// Maps are not iteratable like this
