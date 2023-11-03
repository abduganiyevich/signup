const firstName=document.getElementById("name");
const lastName=document.getElementById("surname");
const phone=document.getElementById("phone");
const password=document.getElementById("pass");
const email=document.getElementById("email");
const submit=document.getElementById("submit");
const reset=document.getElementById("reset");
const button=document.getElementById("button");
const container=document.getElementById("container");
const popup=document.getElementById("confirmation");
submit.addEventListener('click',()=>{
    container.style.display='none';
    confirmation.style.display="block";
});
