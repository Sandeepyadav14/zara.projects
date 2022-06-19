import {navbar} from "../navbar.js"
// console.log(navbar())
let nav=document.getElementById("row1")
nav.innerHTML=navbar()


var name=JSON.parse(localStorage.getItem("name"))||[]
let username=document.getElementById("f")
let n1=document.getElementById("name1")
let n2=document.getElementById("name2")
username.innerText=name[0]
n1.innerText=name[0]
n2.innerText=name[0]






document.getElementById("signout").addEventListener("click",logout)

function logout(){
   name=[]
   localStorage.setItem("name",JSON.stringify(name))
   window.location.href="signup.html"
}