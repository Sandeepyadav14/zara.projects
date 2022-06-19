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
let userData=JSON.parse(localStorage.getItem("createaccount"))
console.log(userData)
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
         window.location.href="index.html"
          break;

      }
      else{
         alert("Password is incorrect")
         break;
      }
   }
   else if(userData.length-1==i){
      alert("Please fill correct email address & password")
   }
}
// let username=document.getElementById("f")
// username.innerText=name[0]
}
// let name=JSON.parse(localStorage.getItem("name"))||[]
// let username=document.getElementById("f")
// if(name[0]===undefined){
//    username.innerText=""
// }
// else{
//    username.innerText=name[0]
// }


function logout(){
   window.location.href="logout.html"
}





var name=JSON.parse(localStorage.getItem("name"))||[]
var username=document.getElementById("f")
if(name[0]===undefined){
   username.innerText="Login"
}
else{
   username.innerText=name[0]
}



document.getElementById("f").addEventListener("click",login)

function login(){
    // window.location.href="signup.html"
    if(username.innerText===name[0]){
      window.location.href="logout.html"
    }
    else if(username.innerText==="Login"){
        window.location.href="signup.html"
    }
}


document.getElementById("b").addEventListener("click",imageclick)

function imageclick(){
    window.location.href="index.html"
}
document.getElementById("c").addEventListener("click",search)

function search(){
    window.location.href="search.html"
}
document.getElementById("e").addEventListener("click",cart)

function cart(){
    window.location.href="cart.html"
}