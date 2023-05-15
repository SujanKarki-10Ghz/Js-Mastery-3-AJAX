//understanding callbacks

//In JavaScript, callbacks are functions that are passed as arguments to other functions
// and are executed inside those functions.

//For example, let's say you want to make an API call to get some data.
//You might use a function like fetch() to make the call.
//However, fetch() is an asynchronous function,
// meaning it doesn't block the rest of your code from running while it waits for a response.
// To handle the response from fetch(), you can pass a callback function as an argument.
// This callback function will be executed once the data is received from the API.

// function getData(callback) {
//     fetch('https://api.example.com/data')
//       .then(response => response.json())
//       .then(data => {
//         callback(data);
//       });
//   }
  
//   function handleData(data) {
//     console.log(data);
//   }

//   getData(handleData);

  // In this example, getData() is a function that makes an API call using fetch().
  //It takes a callback function as an argument, which in this case is handleData().
  // Once the data is received from the API, 
  //the callback function is executed and the data is passed to it as an argument.
  // In this case, handleData() simply logs the data to the console.

  //let's understand with simple example
   
  function myFunc(callback){
    console.log("Function is doing task 1");
    callback();
  }

  myFunc(()=>{
    console.log("Function is doing task 2");
  });


  //another example
  function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure){
    if(typeof number1 === "number" && typeof number2 ==="number"){
        onSuccess(number1, number2);
    }
    else{
        onFailure();
    }
  }

  getTwoNumbersAndAdd("4",5, (num1, num2)=>{
    console.log(num1 + num2);
  }, ()=>{
    console.log("Wrong data type");
    console.log("Please enter numbers only");
  });   