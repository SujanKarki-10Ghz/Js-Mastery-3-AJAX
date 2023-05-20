const URL = "https://jsonplaceholder.typicode.com/posts";

// const fetch = fetch(URL); //return  promise
//  fetch(URL).then((response)=>{
//     if(response.ok){
//     const res = response.json();
//     return res;
//     }else{
//         throw new Error("Something went wrong")
//     }
// }).then((res)=>{
//     const data = res;
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })


//post method
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
