const botn = document.querySelector("#btn");
const approx = document.querySelector(".section");
const filledtext = document.querySelector(".filled");

botn.addEventListener("click",function(e){
    e.preventDefault();   
    const newobj =  document.createElement("li");
    // newobj.innerText=filledtext.value;
    newobj.innerHTML=`<span class="text" > ${filledtext.value}</span>
        <div class="todo-buttons">
            <button>Done</button>
            <button>Remove</button>
        </div>`
    filledtext.value="";
    approx.append(newobj);
    
})

approx.addEventListener("click",(e)=>{
    //done 
    e.preventDefault();
    if(e.target.innerText=="Remove"){
        const rmvli =e.target.parentNode.parentNode;
        rmvli.remove();
    }
    if(e.target.innerText=="Done"){
        const liSpan= e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration ="line-through";
    }


    //remove
})