import {navbar} from "../navbar.js"
console.log(navbar())
let nav=document.getElementById("row1")
nav.innerHTML=navbar()





document.getElementById("b").addEventListener("click",registerbutton)
document.getElementById("loginbutton").addEventListener("click",loginuser)
document.getElementById("f").addEventListener("click",logout)

function registerbutton(){
   window.location.href="createaccount.html"
}

function loginuser(){
   console.log("hi")
let userData=JSON.parse(localStorage.getItem("createaccount"))
let e=document.getElementById("loginemail").value
let p=document.getElementById("loginpassword").value
// console.log(e,p)
let name=JSON.parse(localStorage.getItem("name"))||[]
name=[]
for(let i=0;i<userData.length;i++ ){
   
   console.log(userData[i])
   if(userData[i].email===e){
      if(userData[i].password===p){
         alert("Successefuly Logined")
         let n=userData[i].name
         name.push(n)
         localStorage.setItem("name",JSON.stringify(name))
          break;

      }
      else{
         alert("Password is incorrect")
         break;
      }
   }
}
// let username=document.getElementById("f")
// username.innerText=name[0]
}
let name=JSON.parse(localStorage.getItem("name"))||[]
let username=document.getElementById("f")
if(name[0]===undefined){
   username.innerText=""
}
else{
   username.innerText=name[0]
}


function logout(){
   window.location.href="logout.html"
}