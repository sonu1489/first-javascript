// const ul= document.querySelector(".items");

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent="hello";
// ul.children[1].innerText="sonu";
// ul.lastElementChild.innerHTML="<h1>hello</h1>";

// const btn=document.querySelector(".btn")
// btn.style.background="red";

// const btn=document.querySelector(".btn");
// btn.addEventListener("click", (e)=>{
//     e.preventDefault();
// console.log(e.target.className);
// console.log("click");
// })

// const btn=document.querySelector(".btn");
// btn.addEventListener("click", (e)=>{ 
//     // {"mouseover, mouseout"}
//     e.preventDefault();
//     document.querySelector("#my-form").style.background="orange";
//     document.querySelector("body").classList.add("bg-dark");
//     document.querySelector(".items").lastElementChild.innerText="hello";
//     document.querySelector(".items").style.color="black";

// })

// ********************************************************************************************

const myForm= document.querySelector("#my-form");
const nameInput= document.querySelector("#name");
const emailInput= document.querySelector("#email");
const msg= document.querySelector(".msg");
const userList= document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e){
    e.preventDefault();
    // console.log(nameInput.value);
    if(nameInput.value==="" || emailInput.value===""){
        msg.classList.add("error")
        msg.innerHTML="please enter all field";
        setTimeout(()=>msg.remove() ,3000);
    }
        else{
            const li=document.createElement('li');
            li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));
            userList.appendChild(li);
            nameInput.value="";
            emailInput.value="";
        }

    }


