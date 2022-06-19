import {navbar} from "../navbar.js"
// console.log(navbar())
let nav=document.getElementById("row1")
nav.innerHTML=navbar()


import {footer} from "/footer.js"
let foot=document.getElementById("container1")
foot.innerHTML=footer()


let cartData=JSON.parse(localStorage.getItem("productsData"))

let totalitem=0
let totalprice=0

function appendData(){
// console.log(cartData)

cartData.forEach(function (el,Index){
    totalitem++
    // console.log(el)
    let container=document.getElementById("row3")

    let div=document.createElement("div")
    div.setAttribute("id","card")
    let div1=document.createElement("div")

    let img1=document.createElement("img")
    img1.src=el.img_url
    let div2=document.createElement("div")
    let name=document.createElement("p")
    name.innerText=el.name

    let price=document.createElement("p")
    price.innerText="Price:"+el.price

    let div3=document.createElement("div")
    let del=document.createElement("button")
    del.innerText="Delete"
    del.setAttribute("id","del")
    del.addEventListener("click",function(){
        deleteitem(Index)
    })

    totalprice=totalprice+Number(el.price)


    div1.append(img1)
    div3.append(del)

    div2.append(name,price,div3)

    div.append(div1,div2)
    container.append(div)
})



}


appendData()


function  deleteitem(Index){
    cartData.splice(Index,1)
    localStorage.setItem("productsData",JSON.stringify(cartData))
    window.location.reload()
}


let total=document.getElementById("totalprice")
total.innerText=totalprice
// console.log(totalitem)
// console.log(totalprice)

document.getElementById("continue").addEventListener("click",nextpage)

function nextpage(){
    if(username.innerText==="Login"){
        alert("Please login first")
        window.location.href="signup.html"
    }
    else{
        window.location.href="purchase.html"
    }
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
    window.location.href="women.html"
}
document.getElementById("e").addEventListener("click",cart)

function cart(){
    window.location.href="cart.html"
}