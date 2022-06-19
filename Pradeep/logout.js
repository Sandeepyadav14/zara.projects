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
   alert("your accout has been loged out")
   window.location.href="index.html"
}















// var name=JSON.parse(localStorage.getItem("name"))||[]
// var username=document.getElementById("f")
// if(name[0]===undefined){
//    username.innerText="Login"
// }
// else{
//    username.innerText=name[0]
// }



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