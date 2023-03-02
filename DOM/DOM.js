// DOM Document Object Model


// // const title = document.getElementById("title");
//const list = document.getElementsByClassName("list");

// querySelector
const title = document.querySelector("#title");
const list = document.querySelector(".list")
const items = document.querySelector(".item")
const btn = document.querySelector("#btn")
const naver = document.querySelector(".naver")

title.style.color = "red"
title.style.backgroundColor = "green"
title.innerHTML = "<input type='text'/>"
btn.innerText = "button"

list.firstElementChild.remove()
list.lastElementChild.innerHTML="<a>link</a>"

btn.addEventListener("click",function(){
    alert("탕수육")
})


naver.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(e)
    alert("네이버!!")
})

//console.log({title,list,items,btn})