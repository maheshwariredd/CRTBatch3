// console.log(window)
// console.log(document)

// let element = document.getElementById("demo");
// element.InnerText="G+"
// console.log(element);

// let ele = document.getElementById("test");
// ele.InnerHTML = "<h1>header</h1>"
// console.log(ele)

// let ele = document.getElementsByClassNameName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerText="Hello"

// //ele[0].style.backgroundColor="tomato"

// //? syntax :- [...variable];
// let x = [...ele];
// //console.log(x , Array.isArray(x));
// x.map(element=>{
//     //console.log(element);
//     element.style.backgroundColor="orange"
// })

// let ele = document.querySelectorAll(".test");
// console.log(ele);


// let ele = document.createElement("h1");
// ele.innerText = "Dynamic creation of html element";
// ele.id = "demo";
// ele.removeAttribute("id")
//console.log(ele)
// let image = document.createElement("img");
// image.src = "./burger.jpg";
// console.log(image);

// document.body.appendChild(ele);
// document.body.appentChild(image)
 

let form = document.querySelector("form");
let username = document.getElementById("uName");
let mail = document.getElementById("uMail");
let psw = document.getElementById("uPass");
 

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let uname= username.value;
    let uemail= mail.value;
    let upass= psw.value;
    let userDetails={
        uname,uemail,upass
    }
    console.log(userDetails);
    localStorage.setItem("userData", JSON.stringify(userDetails))
})