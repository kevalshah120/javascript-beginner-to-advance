/*
A higher order function in javascript is a function that does at least one of the following:
    Takes one or more functions as arguments
    Returns a function
Higher order function levearages first class function nature,where functions are treated as objects that can be passed around, assigned to variables, or returned from other functions. They are a cornerstone of functional programming

Higher-order functions are functions that take other functions as arguments or return functions. Their hoisting behavior depends on whether they are defined as function declarations (hoisted) or function expressions (not fully hoisted).
Callback functions are functions passed as arguments to other functions. Their hoisting behavior also depends on how they are defined (declaration vs. expression).
Case 1: Callback as a Function Declaration
    If a callback is defined as a function declaration, it’s fully hoisted:
Case 2: Callback as a Function Expression
    If the callback is a function expression, it’s not hoisted:
Case 3: Inline Callback (Arrow Function or Anonymous Function)
    Callbacks are often passed inline, especially with arrow functions or anonymous functions. These are not hoisted because they’re defined at the point of the function call:



 */

// function a(){
//     console.log("majama")
// }
// a.name_val = "keval"
// a()
// console.log(typeof a) //prints function but there is no such type in js internally its of object type
// console.dir(a) //prints the function in object format and now after that expand the prototype section and in that you will find object()


// var obj = {
//   lala: "lala",
//   c: function() {
//     console.log(this.lala); // Access lala using this
//     console.log(this.kala); // Access kala using this
//     console.log(this.bhala); // prints undefied
//   }
// };

// obj.kala = "kala";
// console.log(obj.kala);
// obj.c(); 

console.log("----------------------------###########################----------------------")

var factorial = function fact(n) {
    return n === 0 ? 1 : n * fact(n - 1);
};
console.log(factorial(5)); // 120
// The name fact is only available inside the function, not hoisted to the outer scope.

function map_fn(array,transformfn)
{
  const res_arr = []
  for(let val of array)
  {
    res_arr.push(transformfn(val))
  }
  return res_arr
}
const numbers = [1, 2, 3];
const doubled = map_fn(numbers,(x)=>x*2)
console.log(numbers)
console.log(doubled)

function createmultiplier(num)
{
  return function(lala)
  {
    return lala*num
  }
}
mul2generator_fun = createmultiplier(2)
console.log(mul2generator_fun(5))
console.log(mul2generator_fun(6))
