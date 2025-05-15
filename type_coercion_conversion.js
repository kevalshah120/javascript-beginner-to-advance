// JavaScript’s dynamic typing allows values to be coerced (automatically converted) between types in certain operations, which can lead to unexpected results.
/*

Implicit Coercion:
Occurs in operations like +, ==, or conditionals.


*/
console.log("5" + 3); // Output: "53" (number to string)
console.log("5" - 3); // Output: 2 (string to number)
console.log("5" == 5); // Output: true (loose equality coerces)
console.log("5" === 5); // Output: false (strict equality, no coercion)

// Explicit Conversion:
// Use functions like Number(), String(), Boolean(), or operators like parseInt(), parseFloat().

// weirds op
console.log(null + ""); // Output: "null"
console.log([] + []); // Output: "" (empty string)
console.log([1, 2] + [3, 4]); // Output: "1,23,4"