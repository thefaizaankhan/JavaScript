# JavaScript and Classes 
  In JavaScript, classes exist, but they are essentially syntactic sugar over its prototype-based inheritance model. While they provide a more familiar object-oriented programming (OOP) syntax, under the hood, JavaScript continues to use prototypes to manage inheritance and object behavior.

  A class in JavaScript is a special type of function that simplifies object creation and inheritance. Introduced in ES6 (ECMAScript 2015), the class syntax allows developers to define a constructor and methods for objects in a more structured way, similar to classes in other programming languages like Java, C++, or Python.

  Before ES6 (ECMAScript 2015):

  JavaScript used prototype-based inheritance. Objects inherit properties and methods directly from other objects.   
  "Classes" were simulated using constructor functions and prototypes. 
    
  With ES6:

  The class keyword was introduced, providing a more familiar syntax for defining classes, similar to languages like Java or C++.

  However, JavaScript is primarily a prototype-based language and under the hood, JavaScript classes are still based on prototypes. They are essentially "syntactic sugar" over the prototype-based inheritance model.   

  Key points :-

  - Syntactic sugar: The class syntax makes it easier to write object-oriented code in JavaScript, but it doesn't fundamentally change how inheritance works.

  - Prototypes: JavaScript objects have a prototype, which is another object that they inherit properties from. This forms a prototype chain.   

  - Constructor: A special method within a class that is used to create and initialize objects (instances) of that class.   

# JavaScript is a prototype based language.

# OOP

# Object 
  - collection of properties and methods
  - Promise, Date, Math, Array all are objects

# Why use OOP ?
  - Simplify the management of complex applications
  - Increase code reusability and maintainability
  - Encapsulate and protect data
  - Provide structure and organization in larger projects

# Parts of OOP
  - Object Literal (literal means literally -> for ex exactly 2)
  - Constructor Function 
  - Prototypes
  - Classes
  - Instances (new, this)

# 4 Pillars of OOP
  - Abstraction -  Hiding complex implementation, showing only necessary information. (ex. - fetch())
  - Encapsulation - Keeping data safe within objects and exposing only needed functionality. (Bundling or Wrapping data and methods, restricting direct access)
  - Inheritance -  A child class inherits properties and methods from a parent class.
  - Polymorphism - Objects of different classes can be treated as objects of a common superclass.(Performing the same action in different ways.)



