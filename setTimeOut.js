/**
 * setTimeout is a method in JS that allows the execution of a function after a specified amount of time has passed.
 * The setTimeout() is executed only once.
 * Timeouts are cancelled using clearTimeout().
 * To call a function repeatedly (e.g., every N milliseconds), consider using setInterval().
 */


/**Syntax
    setTimeout(code)
    setTimeout(code, delay)

    setTimeout(functionRef)
    setTimeout(functionRef, delay)
    setTimeout(functionRef, delay, param1)
    setTimeout(functionRef, delay, param1, param2)
    setTimeout(functionRef, delay, param1, param2,......,paramN)
*/


// console.log("Script start");
// function hello(){
//     console.log("Hello World");
// }

// setTimeout(hello, 1000);
// console.log("script end");

console.log("script start");
 const id = setTimeout(()=>{
    console.log("Inside setTimeout"); 
}, 1000)
for(let i =0; i<100; i++){
    console.log("...");
}
console.log(id);
console.log("Clearing timeout");
clearTimeout(id);
console.log("script end");

