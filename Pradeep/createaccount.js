
import {form1,form2} from "/form1.js"
var a=form1()
var b=form2()

import {footer} from "/footer.js"
let foot=document.getElementById("container1")
foot.innerHTML=footer()
// console.log(footer())
// console.log(a)


document.getElementById("person").addEventListener("click",person)
document.getElementById("company").addEventListener("click",company)
document.getElementById("button").addEventListener("click",createaccount)





function person(){
   
    let container=document.getElementById("person1")
    container.innerHTML=a
    console.log(container)
}
function company(){
   
    let container=document.getElementById("person1")
    container.innerHTML=b
    console.log(container)
}


function createaccount(){
    let arr=JSON.parse(localStorage.getItem("createaccount"))||[]
    let n=document.getElementById("name").value
    let e=document.getElementById("email").value
    let p=document.getElementById("password").value
    let obj={
        name:n,
        email:e,
        password:p
    }
    // console.log(obj)
    arr.push(obj)

    localStorage.setItem("createaccount",JSON.stringify(arr))


}




