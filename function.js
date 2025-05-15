/*
    A function in JavaScript is a first-class object (treating it like variable) that encapsulates reusable code, allowing you to perform tasks, compute values, or execute logic.

    You can:
        Store them in variables
        Pass them as arguments
        Return them from other functions
        Add properties to them
    Properties: E.g., name, length (number of parameters).


    Parameters: Variables defined in the function signature
    Arguments: Values passed when calling the function

    If no return is specified, or return is used alone, the function returns undefined

    Hoisting in Block Scopes Function declarations inside blocks (e.g., if, for) are hoisted to the top of their containing function or global scope in non-strict mode,
*/

// when a function is invoked, a new function execution context is created and pushed onto the call stack

//most imp run it step by step in chrome browser development tool

// during hoisting the variable are hoisted with value undefined and in case of function function are also hoisted but they are hoisted with its full definiton

fun(10,20)
const name = "keval"
const surname = "shah"
let lala = "lala"
var kala
console.log(kala)
function fun(a,b)
{
    const name = "keval"
    const surname = "shah"
    let lala = "lala"
    var kala = "chala"
    console.log(kala)
    // document.writeln("kevalshah")
}
console.log(kala)



const person = {
    name: "Bob",
    greet: function() {
        console.log(this.name);
    },
    fun()
    {
      console.log("aav chotu") //its an method we cannot say it function for more details check ab.js file
    }
};
const greetFn = person.greet;
console.log("-------------------------------------------")
greetFn(); // undefined (strict mode) or "" (non-strict) mode


/*
    In JavaScript, function declaration and function expression are two ways to define functions(FUNCTION DEFINITION), but they differ in syntax, hoisting behavior, and usage
    1. Function Declaration
        Syntax: Defined using the function keyword followed by a name, parameters, and body.javascript
        fully hoisted
    2. Function Expression
        Syntax: A function is assigned to a variable or used as an expression, often anonymous but can be named.
        Hoisting: Only the variable declaration (if using var, let, or const) is hoisted, not the function assignment. Calling before definition results in an error (or undefined for var).
        (partial hoisting)
*/


// =========================== IMPORTANT =================================
/*
    Lexical Scope:
    JavaScript uses lexical scoping (or static scoping), meaning the scope of a variable is determined by where a function is defined in the source code, not where it is called.

    When a function is defined, its Lexical Environment is created, which includes:
        Environment Record: Stores variables and function declarations for that scope.
        Outer Environment Reference: Points to the Lexical Environment of the parent scope (where the function is defined).
    
        
    When first() is invoked:

    Lexical Environment:
        Environment Record:
        xx: Hoisted (var), initialized to undefined.
        cc: Hoisted (var), initialized to undefined.
    Outer Environment Reference: Points to the GEC’s Lexical Environment (because first is defined in the global scope).

    Function Execution Context (FEC) for second Creation Phase
    When second() is invoked:

    Lexical Environment:
        Environment Record: (Empty, no local variables or parameters).
        Outer Environment Reference: Points to the GEC’s Lexical Environment (because second is defined in the global scope, not inside first).

*/



var xx = "global";
function first() {
  var xx = "first";
  var cc = "enni jaat ne"
  second();
}
function second() {
    // console.log(cc); gives error
    console.log(xx); // Output: global
}
first();

var xx = "global";
function first() {
  var xx = "first";
  var cc = "enni jaat ne";
  function second() {
    console.log(cc); // "enni jaat ne"
    console.log(xx); // "first"
  }
  second();
}
first();


// MOST IMPORTANT
// Memory:
// Variables in outer scopes are stored in the heap if referenced by inner functions

function hulala1()
{
  var chakan = "chakan"
  return function (){
    chakan+="nageen"
    console.log(chakan)
  }
}
chakanfun = hulala1()
chakanfun()
chakanfun()

var factorial = function fact(n) {
    return n === 0 ? 1 : n * fact(n - 1);
};
console.log(factorial(5)); // 120
// The name fact is only available inside the function, not hoisted to the outer scope.


// ------------------------------------ Function declaration using arrow function expression ------------------------------------
const square = (num)=>{
  return num*num
}
// or
const squr = (num) => num*num // agar ek se jyada arguments he toh hu round brackets use karna hoga if we have only single argument then we can use it like num -> num*num

// Returning an object: Wrap the object in parentheses to distinguish it from a function body
const getobj = () => ({name : "keval"})

/*
  difference between when a function is declared usign functiona declaratio technique function funname(){} and function declared using arrow

  function declaration technique
    fully hoisted
    named function
    this Binding: The this keyword is dynamically bound based on how the function is called
    has access to the argument object

  function declared using arrow => (fat arrow)
    Not hoisted
    anonymous by default
    Lexical this binding : Arrow functions do not have their ows this. Instead they inherit this from their surrounding lexical scope(where the function is declared using arrow)
    No argument object
    No prototype property
    arrow function cannot be used as constructor while when a function is declared using function declaration we can use it as constructor


    Regular functions (e.g., function() {}) have a dynamic this that depends on how the function is called. For example, when called as a method (obj.method()), this is the object (obj); when called standalone (fn()), this is undefined (strict mode) or the global object (non-strict mode).

    Arrow functions (() => {}) do not have their own this. Instead, they inherit this from the lexical scope—the scope in which the arrow function is defined, not where it’s called. This is called lexical this binding.

    Arrow Functions Ignore bind/call/apply: Even if you try to change this using bind, arrow functions stick to their lexical this:


    Parentheses (): Used for implicit returns when the arrow function body is a single expression. No return keyword is needed, and the expression’s value is automatically returned. or if you want to Return an Object Literal:
    Curly Braces {}: Used for explicit returns or when the function body contains multiple statements
*/

var pperson = {
    name: "Bob",
    greet: () => console.log(this.name)
};
pperson.greet(); // undefined (this is the outer scope, not person)

/* 
  You expected this to refer to person because the arrow function is defined inside the person object, and you thought lexical this would capture the "parent" scope, which you assumed is person. However:

  The person object is not a scope. Objects in JavaScript don’t create their own lexical scope; they’re just collections of key-value pairs.

  The lexical scope is the code block or function surrounding the arrow function’s definition, not the object it’s a property of.
  
  In this case, the surrounding scope is the global or module scope, not person. Thus, this is undefined (strict mode) or window (non-strict mode), not person.

  Lexical this refers to the this in the surrounding code block or function, not the object.
  
  The person object literal is just a data structure, not a scope. The scope is the global/module scope, which doesn’t have a this value of person.

  Use a regular function (not an arrow function) for greet, so this is dynamically bound to person when called as person.greet().

*/
var ppperson = {
    name: "Bob",
    greet: function() {
        console.log(this.name);
    }
};
ppperson.greet(); // Bob

// Example: Arrow Function Using Non-Global Lexical Scope

var halwo = {
    name: "Bob",
    greet: function() {
        // `this` is `person` because `greet` is called as a method (`person.greet()`)
        console.log(`Regular function this.name: ${this.name}`); // Bob

        // Define an arrow function inside `greet`
        const arrowFn = () => {
            console.log(`Arrow function this.name: ${this.name}`); // Inherits `this` from `greet`
        };

        // Call the arrow function
        arrowFn();
    }
};
halwo.greet()