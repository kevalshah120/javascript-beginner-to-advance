// status code 304 in devtool represent that The HTTP status code 304, also known as "Not Modified," indicates that the requested resource has not been modified since the last time it was accessed. This allows the browser to use its cached version of the resource, saving bandwidth and speeding up load times.
// On the other hand, the 200 OK status code means that the request has succeeded and the server is returning the requested resource.When the server responds with a 200 OK status code, it provides the body of the requested resource, such as an HTML document, JSON     file, or image.

// ctrl+r :: standard refresh (if content is not modified then uses cached resources status code 304)
// ctrl+shift+r : hard refresh (dont uses cached resources instead request the server and the status code is 200 is everythin works file or 404 if the requested resource is not there)


// if you know the difference between method and function then you know that method act as an object's property so for e.g. 'Hi'.toLowerCase() here we are accessing the toLowerCase() method but the question is that string is not an object its a primitive type then how are we able to access it? 

// it's because all primitive data type has wrapper class so for string we have String wrapper class and all this method are associated to these 

console.log(typeof null)         //object
console.log(typeof undefined)    //undefined

// difference between slice and splice in arrays

// object.assign() can also be used to shallow copy objects and array both

// spread operator in js is used to convert the set , map values to array and after that we can also apply foreach or other properties of array not available in set

let balue = "20"
let balue2 = "20asd"
let balue3 = null
let balue4 = undefined
console.log(Number(balue))
console.log(Number(balue2))
console.log(Number(balue3)) //null converting to number gets converted to 0

console.log(Number(balue4))



// == works differently and comparision operation works differently

//comparision converts it to number so >0 gives false but >= returns true
//equality may not convert it to num that why its giving false 

    console.log(null == 0)
console.log(null > 0)
console.log(null >= 0)

let chakan = 123546783231245467n
console.log(chakan,typeof chakan)


// Default Values with ||  
// !! is a shorthand to convert any value to its boolean equivalent
let val = "hello";
console.log(`Value is ${!!val}`); // Output: Value is true
val = 0;
console.log(`Value is ${!!val}`); // Output: Value is false


const arr = [1, 2, 3, 4, 5];
console.log(arr[-1]);  // Output: undefined
// When you try to access an index outside the bounds of the array (either a negative index or an index larger than the highest index), JavaScript returns undefined.


//most important
console.log(arr)
arr.length = 2
console.log(arr)



// Overview of the Two Declarations
var a = 100;
console.log(a,typeof a)
// Creates a primitive number value.
// a holds the literal value 100, which is a simple, immutable primitive type.
// Fast, lightweight, and the standard way to work with numbers in JavaScript.
var a = new Number(100);
console.log(a,typeof a) // Output: "object"
// Creates a Number object (an object wrapper around the number 100).
// a holds an instance of the Number constructor, which is a complex, mutable object.
// Less efficient and rarely needed in practice.
// The key difference lies in primitive vs. object types, which affects their behavior, comparison, memory usage, and use cases.



console.log(+'100') // converts 100 which is in string to number same with - but it will not work for * and division
console.log(100 + '') //conert number to string
console.log(+null) // 0
console.log(+undefined) // nan

console.log(2.99999999999999999999999) // weirdooo js automaitcally convert it into 3

// 7/0 return Infinity
// -7/0 return -Infinity
// 0/0 return NaN


// undefined,null and nan when converted to boolean in javascript returns false

const numarr = [0,11,22,3,4,5,6,77]
console.log(numarr.sort())


//  if a function is not used then no memory is reserved for that and its not hoisted but that't not the case with variables(37 video)
// if inside a block or function if i declare a variable without using var,let or const then it will be created in global window scope and it will be accessible from anywhere inside the scope

// fun1: Accepts one argument, but it's optional
function fun1(arg) {
  console.log("fun1 called with arg:", arg || "no argument provided");
}

// fun2: Requires one argument, throws error if missing
function fun2(arg) {
  if (arguments.length === 0) {
    throw new Error("fun2 requires one argument");
  }
  console.log("fun2 called with arg:", arg);
}

// Test cases
fun1();          // Works: "fun1 called with arg: no argument provided"
fun1("hello");   // Works: "fun1 called with arg: hello"
fun2("hello");   // Works: "fun2 called with arg: hello"
fun2();          // Throws: Error: fun2 requires one argument