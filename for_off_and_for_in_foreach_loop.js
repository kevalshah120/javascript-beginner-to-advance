/*
for...of Loop
Purpose: Iterates over the values of iterable objects (e.g., arrays, strings, maps, sets). if we try to iterate it over object literal which is non iterable in nature then it will give error
Behavior:
    Loops through the values directly, not the keys or indices.


for...in Loop
Purpose: Iterates over the enumerable properties (keys or indices) of an object.
Behavior:
    Loops through the property names (keys) of an object.
    Includes inherited properties if they are enumerable.


In JavaScript, the difference between for...in and for...of loops regarding inherited properties relates to how they handle properties that an object or array inherits from its prototype chain.

What are Inherited Properties?
    In JavaScript, objects (and arrays, which are special objects) can inherit properties and methods from their prototype.
    For example, all arrays inherit methods like push, pop, or properties like length from Array.prototype.
*/

// for in is heavy in nature 

const person = {
    name: "keval",
    age: 19,
    majama : true
}
// Risky if prototype chain is modified.
for(const key in person){
    console.log(`Key : ${key} : value : ${person[key]}}`)
}

// 	Safer, as it only considers own properties.
const keys = Object.keys(person)
for(const key of keys)
{
    console.log(`Key : ${key} : value : ${person[key]}}`)
}
// recommended

for (const [key, value] of Object.entries(person)) {
    console.log(`Key: ${key} : value: ${value}`);
}
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(person.key) //person.key looks for a literal property named key, not the keys of the object.
person.key = "lala"
console.log(person.key) //person.key looks for a literal property named key, not the keys of the object.
console.log(Object.entries(person))  //It takes an object as an argument and returns an array of arrays, where each inner array contains a [key, value] pair for the object’s own enumerable properties.

var chakanarr = ["aav","mota","su","ke","shanti","ne"]
chakanarr.forEach(function(){
    console.log("hi") // it will print hi 6 times
})
chakanarr.forEach((x)=>{
    console.log(x)
})
chakanarr.forEach((val,index)=>{
    console.log(`Index : ${index} : Val : ${val}`)
})
// Key Characteristics of forEach
// No Return Value: forEach always returns undefined. If you need to create a new array or collect results, use methods like map or reduce instead.
// No Early Termination: You cannot break out of a forEach loop early (e.g., like break in a for loop). If you need to stop iteration, consider using a for loop, for...of, or methods like some or every.

const numbers = [1, 2, 3];
numbers.forEach((num, index, arr) => {
  arr[index] = num * 2; // Modifies the original array
});
console.log(numbers); // [2, 4, 6]
const numberss = [1, 2, 3];
numberss.forEach((val, index) => {
  numberss[index] = val * 2; // Modifies the original array
});
console.log(numberss); // [2, 4, 6]

// imp : forEach skips undefined or uninitialized elements in sparse arrays but processes explicitly assigned undefined values:

const lalaarr = [1,2,3]
lalaarr[10] = 10
lalaarr[11] = undefined
lalaarr.forEach(x=>console.log(x)) // index4,9 will be skipped 