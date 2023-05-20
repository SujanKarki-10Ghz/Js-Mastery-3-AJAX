const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url){
    return new Promise ((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function(){
            if(xhr.status >=200 && xhr.status < 300){
                resolve(xhr.response);
            }else{
                reject(new Error("Something went wrong"));
            }
        }
        xhr.onerror = function(){
            reject(new Error("Something went wrong"))
        }
        xhr.send();
    })
}  
//promise chaining 
sendRequest("GET", URL).then((res)=>{
    const data = JSON.parse(res);
    return data;
}).then((data)=>{
    const id = data[3].id;
    return id;
}).then((id)=>{
    const url = `${URL}/${id}`
    return sendRequest("GET", url); //promise
}).then((res)=>{
    const newData =JSON.parse(res);
    console.log(newData);
}).catch((error)=>{
    console.log(error);
})