// Prototypes

// let myName = "Faizaan     "
// let newName = "harry           "

// console.log(myName.trim().length); (This will do but i don't want to do it in this way!)

// console.log(myName.trueLength());

//  we want to make a new method that calculate true length of the string removing all the extra spaces without using any methods ? make a brand new method trueLength which calculates the length of the string. (trueLength is a property and trueLength() is a method -> just to remind the difference :))

// Ok, now we begin to build our own method trueLength()

let myHeros = ["thor", "ironman", "hulk"]

let heroPower = {
  thor: "hammer",
  ironman: "suit",
  spiderman: "sling",

  getSpiderPower: function(){
    console.log(`Spider power is ${this.spiderman}`);
  }
}

// can we inject .faizaan() method by ourself in heroPower -> as heroPower.faizaan()

// everything whether it is string or function is going through object so can we define the method in directly object itself so that anyone can access it or gets the power to use it
Object.prototype.faizaan = function() {
  console.log("Faizaan is present in all objects");  
}

// defining in array (for myHeros array)
Array.prototype.heyFaizaan = function() {
  console.log(`Faizaan says hello to everyone`);
  
}

// heroPower should have faizaan() method
// heroPower.faizaan()

// so myHeros should also have faizaan() method
// myHeros.faizaan() // now array has the power

// myHeros should have heyFaizaan() method
// myHeros.heyFaizaan()

// heroPower.heyFaizaan() // error 

// -----------------------------------------------------------------------

// Inheritance

const User = {
  name: "jim",
  emai: "jim23@gmail.com"
}

const Teacher = {
  makeVideo: true
}

const TeachingSupport = {
  isAvailable: false
}

const TASupport = {
  makeAssignment: 'Js Assignment',
  fullTime: true,
  __proto__: TeachingSupport  // referencing the TeachingSupport property
}

// old syntax
// Teacher.__proto__ = User

// console.log(Teacher.name);
// console.log(Teacher.emai);

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

// console.log(TeachingSupport.makeVideo);

// ------------------------------------------------

// Now, solving our old problem of trueLength() ??

let anotherUsername = "GoodMorning    "

String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`True Length is : ${this.trim().length}`);
}

anotherUsername.trueLength()  // this = jisne call kiya -> anotherUsername ne call kiya

// using method directly
"faizaan   ".trueLength() // this = "faizaan   "
"icecream  ".trueLength()