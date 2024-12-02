/* 

JavaScript Execution Context :-
(How the files in js are executed)

- Js runs the programs in two phases

- On execution, first a Global Execution Context is created. Then this Global EC is referred and is put in 'this' variable. 
- Point to remember is that Global EC is always always made.

(If we run our file in Browser it has a different EC also Node.js environment has a different EC same for Deno, Bun all have their different EC. The value of 'this' in Browser is Window {} object.)

- Global EC runs in the thread (since js is single threaded scripting language one program executes at a time).

- Execution Context we should know :- 
  - Global Execution Context 
  - Function Execution Context 
  - Eval Execution Context (in Mongoose; it is a property of global object)

- Now our js file is executed in two phases, First is Memory Creation Phase or Memory Phase (in this only memory is allocated for variables or functions) or Creation Phase and Second is Execution Phase (the code is executed).

- Let us understand with a code example:-

let val1 = 10
let val2 = 5

function addNum(num1, num2){
  let total = num1 + num2
  return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

- Step 1 : JS code runs within an execution context, which defines the environment in which code is executed. As the code starts executing Global EC is created and put inside 'this' variable.

- Step 2 : Memory Creation Phase - In memory phase, memory is allocated for varibles. Here for val1 the memory is created which is of type undefined...
val 1 -> undefined 
val 2 -> undefined 
addNum -> function definition (only function is declared here)
result1 -> undefined
result2 -> undefined

Now Step1 and Step2 completes one Cycle, this will always be done for the code as the code starts executed. Now we move to next step, from here the Execution Phase starts.

- Step 3 : Execution Phase : here val1 will hold the value 10...
val1 <- 10
val2 <- 5
addNum (there is nothing to execute here)
result1 -> addNum() -> addNum function creates a different Execution Context which is known as New Execution Context. New Execution Context is created each time when a function is called. This New EC contains New Variable Environment (for variables) + Execution Thread (for execution). Now again Memory Creation Phase and Execution Phase is executed for addNum function.

Now, for addNum function -
Memory Phase : 
val1 -> undefined
val2 -> undefined
total -> undefined

Execution Phase : (all the data execution, process , data manipulation)
num1 -> 10
num -> 5
total -> 15 -> the value of total is returned to Global EC -> After returning the value this is important to note that New Execution Context which was created for addNum function will be deleted. now the value of result1 will be result1 = 15.

Step 4 : Here we are still in the Execution phase of step 3. Now we have values :
val1 <- 10
val2 <- 5
addNum()
result1 = 15

Now as the execution reaches result2 variable addNum function will be called again and the whole process will be executed again. (same process that was done for result1 -> addNum() -> New EC -> Deleted)


Step 5 : So, Again in line let result2 = addNum(10, 2) -> the addNum function is called again and the process repeats. New Execution Context is created (New Variable Environment + Execution Thread) -> Memory Phase is executed -> Execution Phase is executed (values may differ) -> value of total is returned to Global EC -> New EC is deleted -> Now result2 = 12.

--------------------------------------------------------------------------------

Call Stack :-

Call Stack is a data structure used by JavaScript engine to keep track of function calls in the order they need to be executed. It follows LIFO Principle - Last In First Out.

Working :-
1. Adding to Stack(Push) - When a function is invoked, it is added to the top of call stack.
2. Removing from Stack(Pop) - When a function completes the execution it is removed from the stack.
3. Global Execution Context - The Global EC is pushed onto the stack first and remains there until the program finishes.

Example :-
function greet() {
  console.log("Hello!");
}

function sayHi() {
  greet();
}

sayHi();

Step-by-step Execution:
- sayHi() is called:
- sayHi is pushed onto the stack.
- Inside sayHi, greet() is called:
- greet is pushed onto the stack.
- greet() executes console.log("Hello!"):
- console.log is pushed and popped immediately after execution.
- greet finishes and is popped off the stack.
- sayHi finishes and is popped off the stack.

- ** Go to Browser -> inspect -> Sources tab -> new snippet -> create a index.js file or with any name -> write this code: 
function one() {
  console.log("one")
}
function  two() {
  console.log("two")
}
function  three() {
  console.log("three")
}

one()
two()
three()

-> add breakpoints (just at the left side of the code) -> save the file (ctrl + s) -> run the file -> pause the script execution and see the Call Stack bar on the left side and console how the code behaves to understand the Call Stack execution in Js.

*/