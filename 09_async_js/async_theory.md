
JavaScript is a Synchornous Programming Language. One by one code is executed.(Default Behaviour)

JavaScript is a Single Threaded Programming Language.(Default Behaviour)

Execution Context of JavaScript :-
  - Execution of one line of code at a time
  - Until the last program is completely executed new program doesn't execute. Each operation waits for the last one to complete before execution.
  - Call Stack
  - Memory Heap

Blocking Code vs Non-Blocking Code :-
  - Blocking Code -> Blocks the flow of program -> Read File Sync
  - Non-Blocking Code -> Doesn't block the execution -> Read File 

- Refer to Diagram :-

- JS Engine is made up to Memory Heap and Call Stack all the execution is done here. But on the other side js running environments like browser, deno.js or node.js JS Engine alone is not present.

- Web API is found in Browser. So if web api is found we'll have the access to DOM but if node.js is present we don't have access to DOM.

- Task Queue makes the js fast and asynchronous.

- High Priority Queue or Promise Queue both are same.

- When a program is executed call stack is made, inside call stack Global Execution Context is made in the Global EC sequence wise each fucntion is loaded and when the execution is completed the function is unloaded. Memory is allocated in memory heap.

- To perform Asynchronous Code -> after doing this work please remind me after some time -> take example of set timeout api ->  suppose a function called set timeout api since the all the execution is asynchronous -> so set timeout api will execute a program after 2 seconds.

- In the Register Call Back it registers the tasks which are done after some time lets say a task is to be executed after 2 sec, 2 min or 5 min or task which are to be done at events like click.

- Task Queue - FIFO (First in First out) - So Register Call back adds the call back to the task queue whenever a task is to be executed. Now task queue adds all the call backs which are then added to the call stack.

- Stack - FILO (First In Last out ) - call stack 

- Some New APIs are added in Js like fetch() - execute if after some time if execution is success tell me and if not then also tell me - same promise queue is made like task queue for fetch() but it is of HIGH PRIORITY. fetch() has a HIGH PRIORITY.


