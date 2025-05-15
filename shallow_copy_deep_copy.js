/* 
In JavaScript, object copying can be done in two main ways:

Shallow Copy: Copies only one level deep — nested objects are still referenced.

Deep Copy: Recursively copies all levels — nested objects are fully duplicated, not shared.
Slower and more memory-intensive but fully independent

Shallow copying duplicates the top-level object but shares references to nested objects.
Deep copying duplicates both the top-level object and all nested objects, ensuring no shared references.

Shallow Copy in JavaScript
    Definition
        A shallow copy creates a new object with copied top-level properties, but nested objects (e.g., arrays or objects) are copied as references, not duplicated. Changes to the top-level properties of the copy don’t affect the original, but changes to nested objects affect both, as they point to the same heap memory.

    How It Works
        Process:
            A new object is allocated in the heap.
            The top-level properties of the original object are copied to the new object.
            For primitive properties (e.g., numbers, strings), the values are copied directly.
            For object properties (e.g., arrays, objects), the references (memory addresses) are copied, not the objects themselves.

//methods by which we can shallow copy an object in javascript
    1. object.assign
    2. using spread operatpr (...)
    3. slice or concat create a shallow copy

-------------------------------------------------------------------------------------------------------------------
Deep Copy in JavaScript
    Definition
        A deep copy creates a new object and recursively duplicates all nested objects, ensuring the copy is completely independent of the original. Changes to any part of the copy (including nested objects) do not affect the original, as they occupy separate heap memory.

    How It Works
        Process:
            A new object is allocated in the heap.
            All properties (top-level and nested) are recursively copied:
            Primitives: Copied directly.
            Objects: New objects are created, and their properties are copied recursively.
            No references are shared between the original and copy.
    
    
    //methods by which we can shallow copy an object in javascript
    1. using JSON.parse(JSON.stringify())
        Serializes the object to a JSON string and parses it back to a new object.When you try to use JSON.stringify() on non-JSON-safe values, these problems occur:
             1. Functions are removed : they are dropped during serialization
             2. undefined values are lost
             3. Symbol properties are ignored
             4. cannot serialize bigint so will throw an error
             5. map,set etc are not preserved properly
             6. cicrular reference problem (explore it more)

        // serialisation is the process of converting a data structure (like object) into string format
        // deserialisation is the process of converting it back into the original object
    2. Using custom recursive function for performing deep copy (didnt get it explore it later)
        function deepCopy(obj) {
            if (obj === null || typeof obj !== "object") {
                return obj; // Return primitives and null
            }
            let copy = Array.isArray(obj) ? [] : {};
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                copy[key] = deepCopy(obj[key]); // Recursive copy
                }
            }
            return copy;
        }
        let original = { a: 1, b: { c: 2 } };
        let copy = deepCopy(original);
        copy.b.c = 3;
        console.log(original.b.c); // Output: 2
    3. Using structured copy(didnt get it explore it later)

    
*/

var original = {
    name:"chakan",
    age:19,
    address:{
        city:"ahmd",
        state:"gujarat"
    },
    arr:["apple","banana","cat"]
}
var copy = original
copy.name="keval"
console.log(original.name)
console.log(copy.name)

//doing shallow 


var original = {
    name:"chakan",
    age:19,
    address:{
        city:"ahmd",
        state:"gujarat"
    },
    arr:["apple","banana","cat"]
}
console.log("Shallow copy usign object.assign()")
Object.assign(copy,original)
copy.name="keval"
console.log(original.name)
console.log(copy.name)

console.log("Before change")

console.log(original.arr)
console.log(copy.arr)

copy.arr[0]="avagandu"

console.log("after change")
console.log(original.arr)
console.log(copy.arr)

//other ways to shallow copy
var original = {
    name:"chakan",
    age:19,
    address:{
        city:"ahmd",
        state:"gujarat"
    },
    arr:["apple","banana","cat"]
}
console.log("Shallow copy usign ...(spread operator)")
var copy = {...original}
copy.name="keval"
console.log(original.name)
console.log(copy.name)

console.log("Before change")

console.log(original.arr)
console.log(copy.arr)

copy.arr[0]="avagandu"

console.log("after change")
console.log(original.arr)
console.log(copy.arr)