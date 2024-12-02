// Immediately Invoked Function Expression (IIFE) - Functions which are executed immediately

// Specially used in Database connection file also sometimes problems arise due to pollution in global scope (declarations of variables and methods in global scope) so to avoid pollution in global scope we use IIFE.

// wrap funtion definition inside () -> and then call the function () just as we call a function normally -> IIFE

(function dbChai(){
    // named IIFE
    console.log("Database Connected");
})();
  
((name) => {
console.log(`Database Connected Again to Database ${name}`); 
})('student_db')
  
  
// Sometimes in some cases we need to declare two or multiple IIFE in the code so to avoid any errors we need to terminate the execution of first IIFE or end the IIFE with the ;