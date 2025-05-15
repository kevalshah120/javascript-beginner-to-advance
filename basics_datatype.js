console.log("keval shah")
//var or let to declare varaible in javascript
let num
console.log(num)  //undefined special primitive value
let temp = null
console.log(typeof num," " ,typeof temp)

example()
function example() {
    console.log(x); // Output: undefined
    var x = 10;
    console.log(x); // Output: 10
  }
example();

function example()
{
    console.log(x);
    var x = 12
    console.log(x)
}
example();

// In JavaScript, you cannot declare multiple functions with the same name — the last one will overwrite the previous ones


if (true) {
    var a = 1;
    let b = 2;
    console.log(a); // Output: 1
    console.log(b); // Output: 2
  }
  console.log(a); // Output: 1 (var is function/global scoped)
//   console.log(b); // ReferenceError: b is not defined (let is block-scoped)


hellolala() //function hoisting with body
function hellolala()
{
    console.log("hello lala")
}

// sayhellolala() // hoisting is done but function is not hoisted it initializes it as undefined and its not a function so will give error
var sayhellolala = function helllala()
{
    console.log("say hell lala");
}





/*

javascript is dynamically typed programming language means variable can hold value of any datatype without specifying the type in advance

primitive data type (7) : immutable and are copied by value when assigned or passed to functions

number
Description: Represents both integer and floating-point numbers.
Special values:
NaN (Not a Number): Result of invalid math operations.
Infinity and -Infinity: Numbers exceeding the maximum/minimum.
NaN is not equal to itself: NaN === NaN is false. Use isNaN() or Number.isNaN().
typeof NaN returns "number".

bigint
boolean

string
Immutable: You can’t change a character in a string directly.
let str = "Hello";
str[0] = "h"; // No effect
console.log(str); // Output: Hello

symbol
// used for uniqueness purpose

undefined
Description: Represents a variable that has been declared but not assigned a value, or a value that is intentionally absent.

Functions return undefined by default if no value is returned.

null
Description: Represents the intentional absence of any object value.

Don’t explicitly set a variable to undefined (e.g., x = undefined). Use null for intentional absence of value.


non primitive data type
object 
mutable and passed by reference


    There are 8 types of data types in JavaScript. They are:

Data Types	Description
String	represents textual data
Number	an integer or a floating-point number
BigInt	an integer with arbitrary precision
Boolean	Any of two values: true or false
Object	key-value pairs of collection of data
Symbol	a data type whose instances are unique and immutable
undefined	a data type whose variable is not initialized
null	special keyword denoting a null value
*/
console.log("************************************************************************************")
let str = "Hello";
str[0] = "h"; // No effect
console.log(str); // Output: Hello

function funn() {
    var lala; // Hoisted, initialized to undefined
    console.log("Before loop, lala:", lala);
  
    let i = 3;
    while (i > 0) {
      lala = i * 10; // Assignment, not a new declaration
      console.log("Inside loop, lala:", lala);
      console.log(`Inside loop, lala: ${lala}`);
      i--;
    }
    console.log("After loop, lala:", lala);
}

// function funn() {
//     // console.log("Before loop, lala:", lala); // ReferenceError: Cannot access 'lala' before initialization
  
//     let i = 3;
//     while (i > 0) {
//       let lala = i * 10; // Declared with let
//       console.log("Inside loop, lala:", lala); // 30, 20, 10
//       i--;
//     }
  
//     // console.log("After loop, lala:", lala); // ReferenceError: lala is not defined
// }
  
funn();

//its an object literal and in this constant means that the reference to that object cannot be changed but you can still modify its contents

//part of esma 6 or later
const ab = {
    name: undefined,
    age: undefined,
    fun: function(){
        console.log("hii")
    }
};
ab.marks = 10
console.log(ab)
ab.fun()
