/*objects in js is non primitve datat type that represent a collection of key value pairs where keys are strings and values can be of any data type. 
    stored in heap memory
    mutable
*/

/*
    1. object literal notation({})
    2. object constructor
    3. using a constructor function
        function Car(brand, model, year) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
        let car1 = new Car("Ford", "Mustang", 2021);
        let car2 = new Car("Tesla", "Model 3", 2022);
        console.log(car1.brand); // Output: Ford
        console.log(car2.model); // Output: Model 3

    4. using object.create() //for creating object from prototype
    5. Using ES6 Classes

*/

const obj1 = {
    firstname:"keval",
    lastname:"shah"
}
const obj2 = {
    firstname:"keval",
    lastname:"shah",
    "chakan-chor":"chakan-chor"
}
obj3 = obj1
// in this if i check there reference id in dev tools then it will show different objects even though there values are same but this is not the case in primitive type if i assign a variable a value 10 and other also 10 then the reference id of these variable will be same
console.log(obj1 == obj2)
console.log(obj1 === obj2)
console.log(obj1 == obj3)
console.log(obj1 === obj3)

// Even though obj1 and obj2 have the same properties and values (firstname: "keval", lastname: "shah"), they are distinct objects stored in different memory locations. In JavaScript, when you compare objects using == or ===, the comparison checks whether the two operands refer to the same object in memory (i.e., the same reference), not whether their contents are identical.

// For objects, both == and === behave the same way because objects are always of the same type (Object or a derived type), so no type coercion occurs with ==. The comparison is purely a reference check.


const lala = "shah"
console.log(lala == obj1.lastname)

//if we actually want to check the content then below is the method by which we can do this
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))


// two ways to access the properties of an object
console.log(obj1.firstname)
console.log(obj1["firstname"])
// console.log(obj2.chakan-chor) it will give error
console.log(obj2["chakan-chor"])
console.log(obj1["first"+"name"]) //we can also do any operation or pass a variable which contains the key
console.log(obj1.fullname)
obj1.fullname="Keval purveshbhai shah"
obj1["father-name"] = "purveshbhai"
console.log(obj1.fullname)
console.log(obj1["father-name"])

// 4. Checking Property Existence
// Using in Operator:
// Checks if a property exists (own or inherited).

// console.log("name" in person); // Output: true
// console.log("salary" in person); // Output: false
// Using hasOwnProperty():
// Checks if a property is an own property (not inherited).


// 3. Deleting Properties
// Use the delete operator to remove a property.
// delete only removes own properties, not inherited ones (covered in Part 2).

/* 
Copying Objects
Since objects are reference types, copying them requires care to avoid unintended side effects.

Shallow Copy:
    Copies top-level properties but shares nested objects.
    Methods:  Spread Operator (...)
    let person = { name: "Alice", info: { city: "New York" } };
    let copy = { ...person };
    copy.name = "Bob";
    copy.info.city = "Boston";
    console.log(person.name); // Output: Alice
    console.log(person.info.city); // Output: Boston (shared nested object)

Deep Copy:
    Copies all levels, including nested objects.


*/




// =========================================================================================================================
/* 
In JavaScript, objects are mutable by default, meaning you can add, modify, or delete their properties after creation. However, sometimes you want to restrict modifications to ensure data integrity, prevent accidental changes, or enforce immutability. The Object.freeze and Object.seal methods provide ways to control an object’s mutability, but they differ in the extent of restrictions they impose.

Object.freeze:
    Makes an object completely immutable (or “frozen”).
    Prevents adding, modifying, or deleting properties, and locks property descriptors (e.g., cannot change writable, configurable).
    Applies to own properties only, with shallow freezing (nested objects are unaffected or mutable unless explicitly frozen).
    Once frozen, an object cannot be made mutable again (you’d need to create a copy).
Object.seal:
    Makes an object partially immutable (or “sealed”).
    Prevents adding or deleting properties but allows modifying existing properties’ values.
    Locks the object’s structure (no new properties) but permits value changes.
    Also applies to own properties only, with shallow sealing.
    Once sealed, an object cannot be made extensible again(unseal)

object.preventextensions
    Object.preventExtensions, which is related but less restrictive than freeze or seal.
    Definition: Prevents adding new properties but allows modifying and deleting existing properties.

*/

// Object.freeze(obj1)
obj1.mothername = "jinal"
console.log(obj1.mothername) //undefined, if we try to add then we will not get any error object if we are in non strict mode, in case if we are in strict mode then modifying values will give error.seal doesn't allow to modify the structure and also dont allow to modify value
obj1.firstname="stavan"
console.log(obj1.firstname) // will print keval the older value

//while object.seal dont allow to modify the structure of the object but it allows to modify the existing value







// ======================= Advance theory #################################
/*
    In JavaScript, every object is a collection of key-value pairs (properties), and each property has associated metadata called a property descriptor. These descriptors control how properties behave and are managed by the JavaScript engine

    Each property of an object has a descriptor with the following attributes:

    value: The actual value of the property (e.g., "Alice" for name: "Alice").
    writable: A boolean indicating whether the property’s value can be changed (true by default).
    enumerable: A boolean indicating whether the property appears in loops like for...in or Object.keys() (true by default).
    configurable: A boolean indicating whether the property’s descriptor can be modified or the property can be deleted (true by default).
    You can inspect or define these attributes using Object.getOwnPropertyDescriptor and Object.defineProperty:
*/
var obj = {
    lala:"lala",
    c:function(){
        // console.log(lala) gives error
        console.log(this.lala)
        console.log(this.kala);
        console.log(this.bhala);
    }
}
obj.kala = "kala"
console.log(obj.lala)
console.log(obj.kala)
console.log(obj.bhala)
obj.c()