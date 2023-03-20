const inputText = document.querySelector(".input-text"); 
const addButton = document.querySelector(".add-button");
const list = document.querySelector(".list")

const likeButtons = document.querySelectorAll(".like");



function addItem(){
    if(inputText.value.trim() === "") return;

// like
    const like = document.createElement("span");
    const likeIcon = document.createElement("span");
    like.classList.add("like");
    likeIcon.classList.add("material-icons"); 
    likeIcon.innerText = "favorite_border";
    like.appendChild(likeIcon);


 
     // item
     const item = document.createElement("span");
     item.classList.add("item")
     item.innerText = inputText.value;
     
     const li = document.createElement("li");
 
     // manage - check
     const manage = document.createElement("span")
     manage.classList.add("manage")
     const checkIcon = document.createElement("span");
     const clearIcon = document.createElement("span");
     checkIcon.classList.add("material-icons","check")
     clearIcon.classList.add("material-icons","clear")
     checkIcon.innerText="check";
     clearIcon.innerText="clear";
     manage.appendChild(checkIcon);
     manage.appendChild(clearIcon);
       
    // event

    like.addEventListener("click",(e)=>{
        const target = e.target;
        const text = target.innerText == "favorite"? "favorite_border":"favorite";
        target.innerText = text;
    })

    // check

    checkIcon.addEventListener("click",(e)=>{
        const target = e.target.parentNode.parentNode;
        target.classList.add("done");
        
    })

    // clear

    clearIcon.addEventListener("click",(e)=>{
        const target = e.target.parentNode.parentNode;
        list.removeChild(target)
    })
 
   
    
     
     li.appendChild(like);
     list.appendChild(li);
     li.appendChild(item);
     li.appendChild(manage);

     inputText.value="";
     inputText.focus();
}




inputText.addEventListener("keypress",e=>{
    console.log(e);   
    if(e.keyCode===13){
        addItem();
    }
})


likeButtons.forEach(like=>{
    like.addEventListener("click",()=>{
        console.log('clicked');
    })
})


addButton.addEventListener("click",addItem)

