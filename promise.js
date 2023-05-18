/**Promise Intro*/
//In JavaScript, promises are a way to handle asynchronous operations.
//They provide a way to write cleaner and more readable code when dealing with tasks that take time to complete,
// such as fetching data from a server or reading a file.

//Think of a promise as a container for a future result.
//It represents a value that may not be available immediately but will be resolved at some point.
// Promises have three states: pending, fulfilled, or rejected.

/**Working of promise */
//=> Creating a Promise:
//To create a promise, you use the new Promise() constructor,
//and provide it with a function that takes two arguments, commonly called resolve and reject.
// Inside this function, you perform your asynchronous task.

//=> Pending State:
// Initially, the promise is in a pending state
// This means that the asynchronous task hasn't completed yet.

//=>Resolving a Promise:
//When the asynchronous task completes successfully, you call the resolve function with the result.
// This transitions the promise from the pending state to the fulfilled state.

//=> Rejecting a Promise:
//If there is an error during the asynchronous task,
//you call the reject function, passing an error message or an error object.
//This transitions the promise from the pending state to the rejected state.

//=>Handling the Promise:
//To handle the result of a promise, you can chain .then() and .catch() methods.
//The .then() method is called when the promise is fulfilled, and you can access the resolved value.  
//The .catch() method is called when the promise is rejected, and you can handle the error.


//=> Chaining Promises: 
//Promises can be chained together using multiple .then() calls.
//Each .then() can return another promise or a value, which can be accessed by the next .then() in the chain. 


// const myPromise = new Promise((resolve, reject) => {
//     // Do some asynchronous operation here
//     // ...
//     if (/* operation was successful */) {
//       resolve(result);
//     } else {
//       reject(error);
//     }
//   });
  
//   myPromise
//     .then(result => {
//       // Do something with the result
//     })
//     .catch(error => {
//       // Handle the error
//     });


// simple example
// console.log("script start");
// const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
// const promise = new Promise((resolve, reject)=>{
//     //some async operations if needed
//     if(bucket.includes("vegetables") && bucket.includes("rice") && bucket.includes("salt")){
//         resolve("fried rice"); //we can pass anything here, it can be string, object, array etc.
//     }else{
//         reject("Couldn't fulfill promise");
//     }
// })

// promise.then((myFriedRice)=>{ //takes resolve value
//     console.log("let's eat", myFriedRice);
// }).catch((error)=>{ //takes reject value
// console.log(error);
// })

// setTimeout(()=>{
// console.log("Hello from timeout");
// },1000)

// console.log("script end");

//output
//script start
//script end
// let's eat fried rice
//Hello from timeout


/**Function returning promise*/
const Promisefunc = ()=>{
    const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(bucket.includes("vegetables") && bucket.includes("rice") && bucket.includes("salt")){
                resolve("fried rice");
            }else{
                reject("Something went wrong");
            }
        },2000)
    })
}

Promisefunc().then((myFriedRice)=>{
    console.log("lets eat", myFriedRice);
}).catch((error)=>{
    console.log(error);
})
//output
//lets eat fried rice


/** Promise chaining */
// Each .then() can return another promise or a value,
// which can be accessed by the next .then() in the chain.
const myPromise =()=>{
    return new Promise ((resolve, reject)=>{
        resolve("foo");
    })
}

myPromise().then((value)=>{
    console.log(value);
    value+= "bar";
    return value; //=> returns promise or value/ if nothing is return then it will automatically return undefined
}).then((value)=>{ //=> another .then can access the returned promise or value
    console.log(value);
    value+= "char";
    return value;
}).then((value)=>{
    console.log(value);
})