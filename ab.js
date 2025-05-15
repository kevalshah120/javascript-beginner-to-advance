function greet() {

    // local variable
    var message = "Hello";
    lala = "lala"               // allowed in non stirct mode of js
    console.log(`LALA :${lala}`)
    console.log(`Local: ${message}`);
}

greet();

// try to access message variable
// outside the greet() function
// console.log(`Global: ${message}`);