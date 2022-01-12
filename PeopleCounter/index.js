let counter= document.querySelector(".counter")
let count=0;
function increment(){
    count+=1;
    counter.innerText=count;
}

let prev=document.querySelector(".prev")

function save() {
    prev.innerHTML+=count+" - ";
    counter.innerHTML=0
    count=0;

}
