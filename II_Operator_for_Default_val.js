// || operator is used to provide fallback value when a variable or expression is falsy.
// if the first operand is truthy, || returns the first operand
// if the first operand in falst returns the second operand

console.log(true || false); // Output: true
console.log(0 || 42); // Output: 42 (0 is falsy, so second operand is returned)

let username = ""; // Could be user input
let displayName = username || "Guest";
console.log(displayName); // Output: Guest (username is falsy, so default is used)

// || is short-circuiting: If the first operand is truthy, the second operand is not evaluated.
let x = "value" || console.log("This won't run");
console.log(x); // Output: value (second operand skipped)


// All falsy values (undefined, null, 0, "", false, NaN, 0n) cause the || operator to return the second operand.

function setVolume(level) {
    level = level || 50;
    console.log(`Volume set to ${level}`);
  }
setVolume(); // Output: Volume set to 50
setVolume(75); // Output: Volume set to 75


// Nullish Coalescing (??):
// Returns the first non-nullish value (i.e., not null or undefined) or the last operand if all are nullish.
// Only considers null and undefined as candidates for replacement with a default.
// Introduced in ES2020 for more precise default value handling.
// Only defaults for null or undefined, preserving 0, "", false, NaN.