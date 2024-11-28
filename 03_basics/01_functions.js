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

const result = addTwoNumbers(3, 7)
console.log("Result : ", result); // undefined (why ?)
// Here is the when we make mistakes : on adding both the numbers we get value as 10 but on console we get result as 'Undefined' or we can check by type of -> 'Undefined' because inside function definition we are displaying the output or consoling but not returning the value.

function addMyNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result
    return number1 + number2
    // console.log("faizaan khan"); // after return code stops execution, nothing will print 
}

const output = addMyNumbers(4, 12);
console.log("Result : ", output);  // number
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
console.log(loginUserMessage());

// If in function definition defining parameter as username = "jim" -> Jim just logged in! (will be returned) but if at the function call we pass argument as loginUserName("Faizaan") -> it will overwrite the Jim and Faizaan just logged in! will returned.

// Falsy values in JS :-
// undefined
// null
// false
// 0 (the number zero)
// NaN (Not a Number)
// "" (empty string)



