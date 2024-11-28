// Functions 

// like a code package of multiple lines and can be called again and again and anywhere

function sayMyName() {
    console.log("hello bhai");
    console.log("good morning bhai");
    console.log("good night bhai");
}

// Point to remember : here when we write sayMyName only it is the Reference of the function but sayMyName() is the Execution of function 
// sayMyName();

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

// addTwoNumbers(33, 44);
// addTwoNumbers(33, "44");
// addTwoNumbers(33, "a");
// addTwoNumbers(33, null);

// When making a function definition -> function addTwoNumbers(number1, number2) {} -> called as Parameters ->  number1 and number2 are parameters
// When calling a function -> addTwoNumbers(33, 44) -> passing the values -> called as Arguments -> 33 and 44 are arguments

// const result = addTwoNumbers(3, 7)
// console.log("Result : ", result); // undefined (why ?)
// Here is the when we make mistakes : on adding both the numbers we get value as 10 but on console we get result as 'Undefined' or we can check by type of -> 'Undefined' because inside function definition we are displaying the output or consoling but not returning the value.

function addMyNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result
    return number1 + number2
    // console.log("faizaan khan"); // after return code stops execution, nothing will print 
}

// const output = addMyNumbers(4, 12);
// console.log("Result : ", output);  // number
// console.log(typeof output); 

// console.log will not work when storing a value returned by a function only return will work then we can store the value returned by function 

function loginUserMessage(username){
    // if(username === undefined){  
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in!`
}

// console.log(loginUserMessage("Faizaan"));
// console.log(loginUserMessage());

// If in function definition defining parameter as username = "jim" -> Jim just logged in! (will be returned) but if at the function call we pass argument as loginUserName("Faizaan") -> it will overwrite the Jim and Faizaan just logged in! will returned.

// Falsy values in JS :-
// undefined
// null
// false
// 0 (the number zero)
// NaN (Not a Number)
// "" (empty string)

//+++++++++++++++++++++++++++++++++++++++++++++++++++

// Shopping cart example in Ecommerce App

// ...num1 -> triple dot -> is the rest operator here (also called as Spread Operator depends on the use case) it bundles up the arguments passed in an array

// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 600, 2000)) // output : [ 200, 400, 600, 2000 ]

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// here val1 = 200, val2 = 400 and ...num1 = [600, 2000]
console.log(calculateCartPrice(200, 400, 600, 2000)) // output : [ 600, 2000 ]

// -----------------------------------------------------

// Passing object in the Function 

const user = {
    username: "faizaan khan", 
    price: 199
}

// parameter is anyobject so that any object can pass through it (not user{} object)
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
//**  check for typesafety (price property is available in object or data type of the value you are passing is object or not )

//passing object directly at the function call
handleObject({
    username: "Harry", 
    price: "299"
});

// ----------------------------------------------------

// Passing Array in the Function

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1] // see for the parameter which is passed here getArray and access the value as you want do not write myNewArray bcoz that can be any array
}

console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([200, 400, 100, 600]))
