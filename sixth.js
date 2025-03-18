//AJAX : asynchronous javascript and XML

//http request


// is a set of web development technique 
// using many technology on the client side
// to create async web applications

// with ajax , web applications can send and retrive data from a server asynchronously
// without interfering with the display and behaviour of the existing page

// we have 3 ways to create and send request to server

//1. xmlHTTPRequest(old way of doing it )
//2. fetch API(new way of doing)
//3. axios (this is third party library)




// browser sends a get request by defalut 

// their are various form / verbs u need to know 
// get, post,put, patch , delete

// we don't use xml , json (javascript object notation) is used now
// it looks like an array with object but to deferntiate between both 
// in json we have key but can't use other than " " to define a key
// in object we can use '' or " " or may be  a number
// also we can't have a method inside a json 


//1st way

// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();

// console.log(xhr.readyState);
// xhr.open("GET",URL);

// // xhr.onreadystatechange= function(){
// //     if(xhr.readyState===4) console.log(  JSON.parse(xhr.response))
// // }
// // rather than checking it we have a method for it 


// //only executed when readystate is 4
// xhr.onload = function(){
//     const resp = JSON.parse(xhr.response)
//     console.log(resp);
// }

// xhr.send();
            
// xhr.send();
// setTimeout(()=>{
//     console.log(xhr); 

// },5000)

 


//2nd way XHR using promise


// const URL = "https://jsonplaceholder.typicode.com/posts"; 


// function aipcall(method,url){
//        return new Promise((resolve,reject)=>{
        
//         const xhr = new XMLHttpRequest();
//         xhr.open(method,url);
//         xhr.onload = function(){
//             if(xhr.status>=200 && xhr.status<300){
//             resolve(xhr.response);
//         }else{
//             reject(new Error("wrong"));
//         }
//         }
//         xhr.onerror= function(){
//             console.log("network error");
//         } 
//         xhr.send();
//        })
// }
// aipcall("GET",URL).then((data)=>{
//     const dataa = JSON.parse(data); 
//     return dataa;
// }).then((data)=>{
//     console.log(data[4].id);
// })




//fetch
// in fetch error is thrown when it is a network error 
// to do it using catch we need to explicitly throw an error / reject 

// const URL ="https://jsonplaceholder.typicode.com/postss";
 

// fetch(URL).then(response=>{
//     return response.json()
// }).then(data=>{
//     console.log(data);
// }).catch(error=>{
//     console.log("new error");
//     console.log(error)
// })


//async await
// async will always return a promise
// await is used on a promise , and will wait the it gives resolve or reject 

// const URL = "https://jsonplaceholder.typicode.com/posts";
// async function callapi(){
//        const ans = await fetch(URL);
//         if(!ans.ok){
//             throw new Error("something went wrong");
//         }
//         const data = await ans.json();
//             return data
// }


// callapi().then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log("inside catch")
//     console.log(err)
// })





//ES6 Modules 
// we can export,import object, constants form one file to another from es2 module 
 


//classes in js 
class Myclass{

    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    encrypt(){
        return`${this.password}abc`;
    }
}

const chai = new Myclass("van@gn","dwdwwd");
console.log(chai.encrypt());










// falsy values: 0,[],false,null,undefined

  

// properties.something?.key
// const properties = {
//     something:{
//         key:'value'
//     },
//     nothing: 0
// }

// console.log(properties.nothing ? "props present" : 'no such values')
// console.log(properties.nothing ?? "true")





















































