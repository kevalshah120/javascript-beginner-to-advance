/*
arrays are also hoisted
Key Characteristics:
Ordered: Elements are stored in a specific order, accessed by zero-based indices (e.g., arr[0], arr[1]).
Dynamic: Arrays can grow or shrink in size dynamically (no fixed length).
Heterogeneous: Elements can be of any type (e.g., numbers, strings, objects, or even other arrays).
Mutable: Arrays can be modified (e.g., adding, removing, or updating elements).
Reference Type: Stored in the heap memory, with variables holding references to the array.
*/

let lala = ["lala",100,true,undefined]
console.log(lala)
console.log(lala[-3])
lala[10] = "jai hind" 
console.log(lala) // [ 'lala', 100, true, undefined, <6 empty items>, 'jai hind' ]
lala.push("kelal","jadugar","@") // to append the value at the end
console.log(lala)
lala.pop()
console.log(lala)

// ----------------------------------- Most common array methods
/*
    push
    pop
    shift() - pop ka ulta he first element remove kar dega instead of last element (makes changes in original array)
    unshift() - push ka ulta he instead of adding element at end,it adds at starting location (make changes in the original array)
    concat() - returns new array after concatinating arrays doesn't make changes in the original array
    indexof() - returns -1 if the element is not present
    includes() - returns true or false if element is present or not
    reverse() - make changes in the origianl array doesnt return new array
    sort() - sort the original array (most imp it only works for alphabetical sorting) // it sorts the array on the basis of there ascii value so if we array contains data in capital letter and as well as small letters then words with small letter will come at the end
    slice() - returns part of the array (new array) doesn't make change in original array
    splice(index,number_of_elements_to_be_removed_after_that) : it removes/extracts elements from the origianl array and returns a new array 
*/
const numarr = [0,11,22,3,4,5,6,77]
var wordarr=['Keval','Staban',"Chakan",'apple']
console.log(numarr.sort())
console.log(wordarr.sort())
var wordarr=['Keval','Staban',"Chakan",'apple']
let tempwordarr = wordarr.splice(1,2)
console.log(wordarr,tempwordarr)
var tempchakarr = wordarr.splice(0,1,"su_ke_mota")
console.log(wordarr,tempchakarr)

const objtesting = {
    chakan_arr:[1,2,3,"apple","banana"]
}
console.log(objtesting.chakan_arr)
Object.freeze(objtesting.chakan_arr)
objtesting.chakan_arr[0]="zero"
console.log(objtesting.chakan_arr)
// objtesting.chakan_arr.sort() will give error
console.log(objtesting.chakan_arr)

