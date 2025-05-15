/* 
the map() is a built in function on the Array prototype that:
    Iterates over each element in an array.
    Applies a provided callback function to each element.
    Returns a new array containing the results of the callback function for each element.
    Does not modify the original array (it’s immutable in terms of the source array).
    map() doesn’t handle asynchronous callbacks directly. Use Promise.all for async operations:

    //we cannot use map with set or map so first we need to convert set or map into array and then we can use map
    const mapObj = new Map([["a", 1], ["b", 2]]);
    const values = [...mapObj.values()].map(x => x * 2);

*/

const numbers = [1, 2, 3,4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
console.log(numbers); // [1, 2, 3] (original unchanged)


var ind_num_arr = numbers.map((val,index)=>`${val}:${index}`)
console.log(ind_num_arr)

// Since map() returns an array, you can chain other array methods (e.g., filter, reduce) for complex transformations.
const newnum = [1,2,3,4]
const result = newnum
    .map(x => x * 2)
    .filter(x => x > 4);
console.log(result); // [6, 8]

const lalanum = [1,2,3,4,5,6,7,8]
const dupnum = lalanum.filter(()=>true)
const evennum = lalanum.filter((x)=>x%2==0)
console.log(dupnum)
console.log(evennum)

// intresting example

var studarr = [
    {
        name:"keval",
        age:20
    },
    {
        name:"rajvi",
        age:12
    },
    {
        name:"mokuu",
        age:19
    },
    {
        name:"anshi",
        age:6
    },
]
// example of chaining
big_stud_arr = studarr.filter((stud) => stud.age>=18).map((stud)=>stud.name)
console.log(big_stud_arr)


// ################################## Reduce ##################################
/* 
reduce():
The reduce() method is a versatile array method that processes an array to produce a single output value (e.g., a number, object, array) by applying a reducer function to each element, accumulating the result. It’s used for tasks like summing values, grouping data, or transforming arrays into other structures

const result = array.reduce(callback(accumulator, element[, index[, array]])[, initialValue]);
    Callback: A function executed for each element. Parameters:
        accumulator: The accumulated result (updated after each iteration).
        element: The current element.
        index (optional): The index of the current element.
        array (optional): The original array.
    initialValue (optional): The initial value of the accumulator. If omitted, the first element is used, and iteration starts from the second element.
    Return Value: The final value of the accumulator after processing all elements.

    The accumulator can be any type (e.g., number, object, array), making reduce() highly versatile.

    unlike map it can work on other iterables like set or map
*/
console.log("----------------------------------------------- REDUCE -----------------------------------------------")
const redarr = [1,2,3,4,5]
var red_val = redarr.reduce((acc,val) => {
    console.log(val);
}) // OUTPUT WILL BE 2,3,4,5,6 
// 1 IS NOT PRINTED BECAUSE AS WE HAVE NOT PASSED the initial val of accumulator so the default value will be the first element of array and the loop will start running from second index
console.log(red_val)


var red_val = redarr.reduce((acc,val) => {
    console.log(val);
},0)
console.log(red_val)

// in both these case it will red_val will print undefined because we are not returning any val

var red_val = redarr.reduce((acc,val) => {
    console.log(val);
    return acc
},0)
console.log("Returned value : " , red_val)
 

// it is highly used for flattening an arr
arr1 = [1,2,4,5]
arr2 = [10,11]
arr2 = [...arr2, ...arr1];
console.log(arr2)

arr1 = [[1,2],[4,5]]
arr2 = arr1.reduce((acc,arr) => [...acc,...arr],[])
console.log(arr2)

const people = [
    { name: "Bob", age: 30 },
    { name: "staban", age: 50 },
    { name: "Alice", age: 25 }
];
const summary = people
    .filter(p => p.age >= 30)
    .reduce((acc, p) => [...acc, p.name], []);
console.log(summary); // ["Bob"]