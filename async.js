
// console.log(20);
// console.log(30);
// console.l0g(40);
// console.log(50);
// console.log(60);

// setTimeOut methood

// console.log(20);
// console.log(30);
// setTimeOut(()=>{
//     console.l0g(40);
// },500)
// console.log(50);
// console.log(60);

// setIntervel

// console.log(20);
// console.log(30);
// setInterval(()=>{ 
//     console.l0g(40);
// },1500)
// console.log(50);
// console.log(60);

//promise

// let p2 = new Promise((  resolved , reject) => { 
//     resolved("successfull");

// })
// p2.then((response)=> console.log(response))
// p2.catch((error)=> console.log(error))
// p2.finally(()=> console.log("finally for both "))


// function fetchUsers(){
//     let response = fetch ("https://jsonplaceholder.typicode.com/users");
//     response.then(result=>{
//         return result.json().then(data=>{
//             console.log(data);
//             let store = daocument.getElementById("store");
//             console.log(store);
//             data.map(user=>{
                
//                 store.innerHtml +=`
//                 <tr>
//                 <td>${user.id}</td>
//                 <td>${user.name}</td>
//                 <td>${user.email}</td>
//                 <td>${user.company.name}</td>
//                 </tr>
//                 `
//             })
//         })
//     })
//     .catch(err=>console.log(err))

// }
// fetchUsers();

 // async and await
 
let p = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("succes");

    }, 5000)
})

async function demo(){
    console.log("Start");
    let x= await p;
    console.log(x);
    console.log("End");

};
demo()

async function fetchUsers(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
}
fetchUsers();