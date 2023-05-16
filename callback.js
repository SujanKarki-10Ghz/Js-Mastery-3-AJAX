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

  //callbacks, callback hell, pyramid of doom

  const heading1= document.querySelector(".heading1");
  const heading2 = document.querySelector(".heading2");
  const heading3 = document.querySelector(".heading3");
  const heading4 = document.querySelector(".heading4");
  const heading5 = document.querySelector(".heading5");
  const heading6 = document.querySelector(".heading6");
  const heading7 = document.querySelector(".heading7");
  // setTimeout(() => {
  //   heading1.textContent = "Heading1";
  //   heading1.style.color = "violet";
  // }, 1000);

  // setTimeout(()=>{
  //   heading2.textContent = "Heading2";
  //   heading2.style.color = "purple";
  // }, 2000);

  //rather

  // setTimeout(()=>{
  //   heading1.textContent = "Heading1";
  //   heading1.style.color = "violet";

  //   setTimeout(()=>{
  //     heading2.textContent = "Heading2";
  //     heading2.style.color = "red"; 
  //   }, 1000)
  // },1000)


/**task => callback hell*/

// text     Delay   Color
// one       1s       Violet
// Two       2s       Purple
// Three     2s       Red
// Four      1s       Pink
// Five      2s       Green
// Six       3s       Blue
// Seven     1s       Brown


// setTimeout(()=>{
//   heading1.textContent = "one";
//   heading1.style.color = "violet";
//   setTimeout(()=>{
//     heading2.textContent = "Two";
//     heading2.style.color = "purple";
    
//     setTimeout(()=>{
//       heading3.textContent = "Three";
//       heading3.style.color = "red";

//       setTimeout(()=>{
//         heading4.textContent = "Four";
//         heading4.style.color = "pink";

//         setTimeout(()=>{
//           heading5.textContent= "Five";
//           heading5.style.color = "green";

//           setTimeout(() => {
//             heading6.textContent = "Six";
//             heading6.style.color = "blue";

//             setTimeout(() => {
//               heading7.textContent="Seven";
//               heading7.style.color = "brown";
//             }, 1000);
//           }, 3000);
//         },2000)
//       },1000)
//     },2000)
//   }, 2000)
// },1000)


function changeText(element, text, color, time, onSuccessCallback, onFailureCallback){
  setTimeout(()=>{
    if(onSuccessCallback){
      onSuccessCallback();
    }
    if(onFailureCallback){
      onFailureCallback();
    }
    element.textContent = text;
    element.style.color = color;
  }, time)
}

//pyramid of doom
changeText(heading1, "one", "violet", 1000, ()=>{
  changeText(heading2, "two", "purple", 2000, ()=>{
    changeText(heading3, "three", "red", 2000, ()=>{
      changeText(heading4, "four", "pink", 1000, ()=>{
        changeText(heading5, "five", "green", 2000, ()=>{
          changeText(heading6, "six", "blue", 3000, ()=>{
            changeText(heading7, "seven", "brown", 1000, ()=>{
  
            }, ()=>{console.log("heading7 doesn't exist");})
          }, ()=>{console.log("heading6 doesn't exist");})
        }, ()=>{console.log("heading5 doesn't exist");})
      }, ()=>{console.log("heading4 doesn't exist");})
    }, ()=>{console.log("heading3 doesn't exist");})
  }, ()=>{console.log("heading2 doesn't exist");})
}, ()=>{console.log("heading1 doesn't exist");})