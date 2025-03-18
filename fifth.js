// set timeout

// setTimeout(()=>{
//     console.log("hee");
// },1000);
// console.log("Dwdwdw");


//set timeout returns an id 
// const but= document.querySelector("button");
// but.addEventListener("click",()=>{
//     console.log("dq");
// })
// console.log("dewdwd");
// let id= setTimeout(()=>{
//     console.log("dwwd")
// },6000);
// console.log("end");  
// clearTimeout(id);   






//SetInterval (recurring)

// setInterval(()=>{
//     console.log(Math.random());

// },1000);



// callback, callback hell, pyramid of doom
// asynchronous programming


 // when we want to do things in order 

 //setTimeout(()=>{
 //     setTimeout((=>{
 //         setTimeout(()=>{
 //                         },1000) 
 //         }),1000) 
 // },1000)




//promise
// it is like promising something for future and waiting for it to either happen or not 

// const arr = ["salt","vegitable","w"];

// const firedRice =new Promise((resolve,reject)=>{
//     if(arr.includes('salt')&& arr.includes('rice')&&arr.includes("vegitable")){
//         resolve("ok");
//     }else{
//         reject(new Error("missing element"));
//     }
// })

// firedRice.then((data)=>{
//     console.log(data);
// },(error)=>{
//     console.log(error);
// })

//or other way

// firedRice.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


// promise is also asyncronous meaning it also follows like setTimeout thing
// browser handles the promise like the way it use to handle 
// here just the difference is promise is sent to microtask queue
// priority of microtask queue is higher than callback queue


// .then() also returns a promise 



// function ricePromise(){
//     const arr =['salt','vegitable','rice']
//     return new Promise((resolve,reject)=>{
//         if(arr.includes("rice")&&arr.includes("salt")){
//             resolve("ok");
//         }else{
//             reject(new Error("missing element"));
//         }
//     })
// }

// ricePromise().then(val=>{
//     console.log(val);
// })

//we have promise chaining which is cleanner and more effective then callback hell




