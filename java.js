const bnt=document.getElementById("button_login")
const canc=document.getElementById("cancelar");

bnt.addEventListener("click",(evt)=>{
  const menu=document.getElementById("menu");
  const form=document.getElementById("form");
  menu.style.display="none";
  form.style.display="flex";
})

canc.addEventListener("click",()=>{
  const menu=document.getElementById("menu");
  const form=document.getElementById("form");
  menu.style.display="flex";
  form.style.display="none";
})