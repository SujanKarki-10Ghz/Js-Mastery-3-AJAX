//Synchronous Programming vs Asynchronous Programming
//JS is synchronous programming and single threaded

/**Synchronous Programming 
 * It is style of programming where tasks are executed one at a time, in a sequential order.
 * This means when one task is running, the program waits for it to finish before starting the next one.
 * it's like standing in a line at a store, waiting for person in front of you to finish before you can move frwd.
 * This approach can be useful for simple programs where tasks are short and there are no long delay,
 * but can become inefficient when dealing with more complex programs or tasks that require a lot of time to complete.
*/

console.log("script start"); //This runs first and until it doesn't finish, for loop won't start
for(let i=0; i<10000; i++){ //after the first console, for loop runs & until this loop doesn't end, last console won't start
    console.log("inside for loop");
}
console.log("script end");


/**Asynchronous Programming 
 * Asynchronous programming is a way of writing code that allows multiple tasks to be performed at the same time.
 * Instead of waiting for one task to complete before moving on to the next,
 * asynchronous programming lets you start multiple tasks and continue working while they run in the background.
 * This can make our code more efficient and responsive,
 * especially when working with large amounts of data or long-running processes. 
*/

console.log("script start"); //--------1
setTimeout(()=>{ //-----------------4
    console.log("Inside setTimeout"); 
}, 1000)
for(let i =0; i<100; i++){//---------------2
    console.log("...");
}
console.log("script end"); //--------3

/*output
script start
100 ...
script end
Inside setTimeout
*/