
/*
setTimeout and setInterval are not the part of js or ECMA script its provided by browser also promises and alert are also not part of js so if we try to run this things on server it will not run

settimeout strictly wants 1 argument to be passed if we dont then it will give error

if we want to run a specify code after some delay and we want that the remaining part of code should continue its execution then we can use settimeout method

the main difference between settimeout and setinterval is that settimeout runs the code only once after the delay 
while setinterval runs the code continousoly after the delay and not just one time

settimeout returns a timerid and this timerid can be used in cleartimeout and clearinterval function in which we can pass this id and stop the execution of the code attached to that id lets say for e.g. if i want to run code x after 10 second so i will write 

let y = settimeout(x,10*1000)
cleartimeout(y) // now the code x will never run even after 10 second delays

setTimeout(() => {
    
}, timeout);

JavaScript is single-threaded, meaning it executes one task at a time on the call stack.
Asynchronous tasks (like timers, HTTP requests, or events) are handled by the Web APIs (provided by the browser) and the event loop.
The event loop manages the task queue, which holds callbacks ready to be executed when the call stack is empty.

javascript is single threaded which means it executes one task at a time on the call stack

        ------------------------------------ what is call stack in js----------------------------------
        A call stack in JavaScript is a data structure that tracks the execution of function calls in a program.

        When a function is called, a new stack frame is created and pushed onto the call stack. This frame contains:
        The function's arguments.
        Local variables.
        The return address (where to resume execution after the function completes).
        When the function finishes executing, its stack frame is popped off the stack, and control returns to the previous function in the stack.
        The JavaScript engine uses the call stack to manage function execution, ensuring that functions are executed in the correct order.
        ------------------------------------------------------------------------------------------------------------------------
    asynchronous tasks are handled by web api's (provided by the browser) and the event loop
    the event loop manages the callback queue/task queue,which holds callback ready to be executed when the call stack is empty

    ---------------------------------------------Internal Workflow of setTimeout---------------------------------------------
    1. When you call setTimeout(callback, delay):
        The browser’s Web API creates a timer that waits for the specified delay.
        The callback is registered to be executed after the delay.
        A unique timeoutId is returned.
    2. While the timer is running, JavaScript continues executing other code (non-blocking).
    3.  After the delay expires:
        The callback is placed in the task queue.
        The event loop checks if the call stack is empty. If it is, the callback is moved to the call stack and executed.
        If the call stack is busy (e.g., with a long-running loop), the callback waits in the queue, meaning the actual delay may be longer than specified.

    
    Delay Is Not Guaranteed The delay or interval is a minimum, not exact. If the call stack is busy, the callback waits:

*/





// -------------------------------------------------------------------------------------------------------------------------
// Formal Definition
/*
    setTimeout: Schedules a function (or code) to execute once after a specified delay (in milliseconds).
    
    setInterval: Schedules a function (or code) to execute repeatedly at a specified interval (in milliseconds) until explicitly stopped.

    Both are asynchronous, meaning they don’t block the execution of other JavaScript code while waiting for the delay or interval.

    const timeoutId = setTimeout(callback, delay, ...args);
    
    callback: The function to execute after the delay.
    delay: Time in milliseconds to wait before executing the callback (can be 0).
    args: Optional arguments to pass to the callback.
    timeoutId: A unique ID returned to identify the timeout (used to cancel it).

    clearTimeout(timeoutId): Cancels a setTimeout before it executes.
    clearInterval(intervalId): Stops a setInterval from continuing.
*/






// scenario 1
// setTimeout("console.log(`Su ke kebal seth sukh shanti anand mangal ne`)") // run it on browser using inspect
// // now if we want to run it after 10 second 
// setTimeout("console.log(`Su ke kebal seth sukh shanti anand mangal ne`)",10*1000) // run it on browser using inspect
// console.log("bas sukh shanti anand mangal ho mota")

// scenario 2
// console.log("first message")
// setTimeout("console.log(`Interval message`)",3*1000) // run it on browser using inspect
// console.log("after interval message")
// setTimeout(() => {
//     console.log("beti pushpa")
// }, 5*1000);

// scenario 3
// function a()
// {
//     console.log(arguments)
// }
// setTimeout(a,1000,"lala","cake",12) // all this extra arguments will be passed to the callback function


//scenario 4
let cnt = 0;
let cntid = setInterval(() => {
    console.log(cnt++);
    if(cnt == 3)
    {
        clearInterval(cntid)
    }
}, 1000);
