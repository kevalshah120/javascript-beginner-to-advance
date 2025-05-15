"use strict";
// lala = "lala"     throws an error as we are in strict mode lala is not defines    
// console.log(lala) 


// In strict mode, JavaScript requires variables to be explicitly declared with var, let, or const.
// if we are in nonstrict mode and after freezing an object if we try to add any property then we wont get any error instead it will print undefined. in other words  if we try to add then we will not get any error object if we are in non strict mode, in case if we are in strict mode then modifying values will give error.seal doesn't allow to modify the structure and also dont allow to modify value