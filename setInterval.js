//setInterval() is a built-in function in JavaScript that repeatedly calls a function
// or executes a code snippet with a fixed time delay between each call.
//It takes two parameters: the first one is the function or code to be executed,
//and the second one is the time delay in milliseconds.

//For example, the following code will log "Hello, world!" to the console every 1 second:

// setInterval(function() {
//     console.log("Hello, world!");
//   }, 1000);

  // This function is commonly used for: 
  //creating animations,
  // updating data in real-time,
  //or refreshing a web page periodically.

//For example, the following code will log random number between 0 -1 to the console every 1 second:

//   console.log("script start");
//   setInterval(()=>{
//     console.log(Math.random());
//   }, 1000)
//   console.log("Script ends");



// console.log("script start");
// setInterval(()=>{
//     let total = 0;
//     for(let i=0; i< 10000000; i++){
//         total+=i;  
//     }
//     console.log(total);
//     console.log(Math.random());
// }, 500)
// console.log("Script end");


const body = document.body;
const buttonEl = document.querySelector("button");
const intervalId = setInterval(()=>{
    const red = Math.floor(Math.random()*126);
    const green = Math.floor(Math.random()*126);
    const blue = Math.floor(Math.random()*126);
    const rgb = `rgb(${red}, ${green}, ${blue})`
    body.style.background = rgb;
}, 1000)
console.log(intervalId);
buttonEl.addEventListener("click", ()=>{
    clearInterval(intervalId);
    buttonEl.textContent = body.style.background;
})