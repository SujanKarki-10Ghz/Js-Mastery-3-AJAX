const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.onload = ()=>{
    if(xhr.status >= 200 && xhr.status < 300){
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
    }
    else{
        console.log("Something went wrong");
    }
}

xhr.onerror = ()=>{ //error handling when internet is disconnected or not working
    console.log("Network error");
}
xhr.send();