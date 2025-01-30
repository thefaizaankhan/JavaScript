// Interview Question of SDE 3 or 2 : In javascript using Math.PI I want to edit the value to 3 or 7. Is this possible if yes how ? and if not why? ( 3.141592653589793 to 3 or 5 or 7)

// Object in JavaScript 

// Object.getOwnPropertyDescriptor => tells the hidden properties of an object

// console.log(Math.PI);
// Math.PI = 5  // trying to overrite the value of Math.PI
// console.log(Math.PI);

// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);

// Output :
// {
//   value: 3.141592653589793,
//   writable: false, (hard coded properties)
//   enumerable: false, (hard coded properties)
//   configurable: false
// }

// So can we define the properties of an object by ourself ?

//  what are factory functions ? 

// const myNewObject = Object.create(null)
// console.log(myNewObject);

const chai = {
  name: 'ginger chai',
  price: '250',
  isAvailable: true,

  orderChai: function(){
    console.log("chai not available"); 
  }
}

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// Output :
// {
//   value: 'ginger chai',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// which properties you want to change
Object.defineProperty(chai,'name', {
  // writable: false,
  enumerable: true, // applied on name property only
});

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// for (let [key, value] of chai) {
//   console.log(`${key} and ${value}`); // TypeError: chai is not iterable
// }

// Strict Inequality Operator (!==) - checks whether two values are not equal and ensures that their types are also not equal

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== 'function') {
    console.log(`${key} and ${value}`); 
  }
    
}

// Output : (but we dont't want the orderChai and function(){} )
// name and ginger chai
// price and 250
// isAvailable and true
// orderChai and function(){
//     console.log("chai not available");
// }

// after applying conditional check 
// Output :
// name and ginger chai
// price and 250
// isAvailable and true