const URL = "https://jsonplaceholder.typicode.com/posts";
// const body = document.body;
// async function getPost(){ //by default returns promise
// const response = await fetch(URL);
// if(!response.ok){
//     throw new Error("Something went wrong");
// }else
// {const data = await response.json();
// // body.textContent  = JSON.stringify (data[0]);
// // console.log(data);
// return data;
// }
// }

const getPost = async()=>{
const response = await fetch(URL);
if(!response.ok){
    throw new Error("Something went wrong");
}else
{const data = await response.json();
// body.textContent  = JSON.stringify (data[0]);
// console.log(data);
return data;
}
}
getPost().then((myData)=>{
    console.log(myData);
}).catch((error)=>{
    console.log(error);
})


