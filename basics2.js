let a = ["keval","henarth","mangu"]
let b = ["lala",a,"chakan"]
let c = ["lala",...a,"chakan"]
console.log(a)
console.log(b)
console.log(c)

let cc = a;
a.push("hemlo");
console.log(a);
console.log(cc);

let bc = [...a];
a.push("sd");
console.log(a);
console.log(bc);

// JavaScript Rest Parameter
let printArray = function(...args) {
    console.log(args);
}

// pass a single argument
printArray(3);

// pass multiple arguments
printArray(4, 5, 6);

// for of loop

for(let elelemnts of c)
{
    console.log(elelemnts);
}
let map = new Map([["key1" , "value1"],["key2" , "value2"]])
var maaap = new Map([["key","val1"],["key","val2"],["key","val3"]])
console.log(maaap)

for(let [key,values] of map)
{
    console.log(key," : ",values);
}
console.log(typeof map, " " , typeof c)
console.log(map instanceof Map,map instanceof Object,c instanceof Object, c instanceof Map)

// The JavaScript for...in loop iterates over the keys of an object.
for(let keys in c)
{
    console.log(keys," : " , c[keys])
}

//nested object
let obj = {
    score : {
        maths:90,
        science:100
    }
}
