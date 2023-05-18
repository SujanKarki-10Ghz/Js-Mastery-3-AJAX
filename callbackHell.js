//lets convert callbackhell to flat code
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");


function changeText(element, text, color, time){
    return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        if(element){
        element.textContent = text;
        element.style.color = color;
        resolve();
        }else{
            reject("element not found");
         }
        }, time)
    })
}

changeText(heading1, "one", "violet", 1000)
.then(()=> changeText(heading2, "two", "purple", 1000) //=> changeText fxn is returning promise so we are technically returning promise
)
.then(()=> changeText(heading3, "three", "green", 1000))
.then(()=>changeText(heading4, "four", "red", 1000))
.then(()=>changeText(heading5, "five", "blue", 1000))
.then(()=>changeText(heading6, "six", "pink", 1000))
.then(()=>changeText(heading7, "seven", "brown", 1000))
.catch((error)=>{
    alert(error);
})