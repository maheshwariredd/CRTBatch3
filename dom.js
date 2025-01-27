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
// //ele.setAttribute( "id" ,"demo");
// ele.id = "demo";
// //ele.removeAttribute("id")
// //console.log(ele)
// let image = document.createElement("img");
// image.src = "burger.jpg";
//  console.log(image);

// document.body.appendChild(ele);
// document.body.appendChild(image)
 

// let form = document.querySelector("form");
// let username = document.getElementById("uName");
// let mail = document.getElementById("uMail");
// let psw = document.getElementById("uPass");
 

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     let uname= username.value;
//     let uemail= mail.value;
//     let upass= psw.value;
//     let userDetails={
//         uname,uemail,upass
//     }
//     console.log(userDetails);
//     localStorage.setItem("userData", JSON.stringify(userDetails))
// })

let mainEle = document.createElement("div");
mainEle.setAttribute("id","mainBlock");
mainEle.style.border="2px solid red";
mainEle.style.width="600px";
mainEle.style.height="600px";
console.log(mainEle);

let topEle = document.createElement("div");
topEle.setAttribute("class" ,"topBlock");

let image = document.createElement("img");
image.src="CAT.jpg";
image.style.width="550px"

let bottomEle = document.createElement("div");
bottomEle.setAttribute("class","bottemBlock");

let h1 = document.createElement("h1");
h1.innerText = "CAT";
h1.style.textAlign="center"

let btn = document.createElement("button");
btn.innterText="view more";
btn.style.border="none";
btn.style.padding="20px";

bottomEle.appendChild(h1);
bottomEle.appendChild(btn);
topEle.appendChild(image);
mainEle.appendChild(topEle);
mainEle.appendChild(bottomEle);
document.body.appendChild(mainEle);




