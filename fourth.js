//How Javascript Works 

//The code first gets compiled and then it is executed

// Compilation Phase
// 1. Tokenizing / lexing
// 2. Parsing (Abstract synatx Tree)
// 3. Code Generation 


//code execution phase
// in js code executes inside execution context - global execution context

//global execution context has 2 phase
//1. Creation Phase (global memory , Memory creation phase)
// --> variable instantiation is perfomed, this value is determined 

//2. Code Execution Phase
// js is a single threaded, synchronous programming language (meaing it will not move to another line until the above line is executed)
// The term or the property of async in javascript is being provided by the browser not the javascript language 


//Global execution context uses stack datastructure


// It is done for mainly two reason 
//1. Early Error checking
//2. Determinig apropriate scope for variable


// console.log(fullname)
// var fullname= fname + lname;
// console.log(fullname);
// var fname="dwd";
// var lname="Dwdw"



//Hoisting 
// let and const are hoisted


//trick question
// let a;
// console.log(a);
 



//ques 2
// if(fname==undefined){
//     console.log("wdwd"); 
// }
// var fname= "dwdw";


//que 3
// console.log(typeof fname);
// let fname="dwdw";

//ques 4
// console.log(typeof fname);





//Clousers
//explaination--> so when a function returns a function then the returned function not f   


// function printfullname(firstname,lastname){

//     function printname(){
//         console.log(firstname,lastname);
//     }
//     return printname;
// }
// const ans = printfullname("ha","ca");
// ans();



//example 

// function power (x){
//     return function (y){
//         return y**x;
//     }
// }
// const ans = power(2);
// console.log(ans(3));


  

//DOM (Document object model)
// when a html page is loaded in the browser then the browser creates a document of the html page
// the document is created inside the window object

// getElementById("id-name")

// querySelector("#id" ".class")
//querySelectorAll()

// when a object is fetched then we can use properties like

//const heading = querySelector("#id");
//heading.textContent="dede"; 
//console.log(heading.innerText)  only prints the showen text


//changing css
// const heading = document.querySelector("div.heading h2")  (meaning all the div , then heading is the name of div and inside heading is h2)
//heading.style.color="blue";
// for properties such as background-color , we have to write in the below way otherwise javascript will produce error 
//heading.style.backgroundColor = "white";

//get and set attribute
// const heading = document.querySelector("#id")
//heading.getAttribute("href") 


//getElementbyClassName
// const arr = document.getElementsByClass("classname");
//it will give html collection of class (array like object)
// we can't use forEach loop
// inorder to do it we have to convert the html collections to array
// we are changing the html collection so always check it is decleared with let not const 
// in the above const arr==    it is declared with const so we have to use let
// let arr = document.getElementsByClass("classname");
// arr = Array.from(arr);



// const arr = document.querySelectorAll(".classname");
//it will give nodelists (array like object)



//Traversing in DOM
// it can be done by understanding how DOM tree is generated 

// DOM is generated when we load a html page and the browser makes a document object inside the window object

// So inside the Document object it has document--> html --> head,text,body
// text include spacing and next line, and inside head has text,title etc.. and inside body we have whole code

// the means of DOM Tree is that we can traverse through it and access various elements

// It is done through by the means of methods like document.getRootNode() , element.siblings , parentNode() etc




//ClassList , add, remove , toggle          











// to add a element 
// const node = document.querySelector(".container li");
// // console.log(node);
// node.innerHTML+= "<li>TO-DO LIST </li>"
// console.log(node);


//other way

// const newele = document.createElement("li");
// newele.textContent ="TO-DO List";
// const node = document.querySelector(".container li");
// node.append(newele);

// we can also use prepand to add before
// we can also remove element using remove() method 




// live list vs static list 

// when we select a div then we add something to it and then print it , it would be showing us the added html part
// this is due to we using queryselector to fetch the div, this is known as static list

// but if we did that using getelememtsbySomething (like id,class,tag) then after adding something and printing the html part
// it will show us the updated html part 





//Events 
// Their are many events in js could be used accordingly but the common ones are as follows'

//their are 3 ways to add an event 
//1. Adding it in html 
//2. using onclick proerty 
//3. using addEventListner

// const buttuon = document.querySelector(".btn");
// buttuon.onclick = function(){
//     console.log("yaaa")
// }

// buttuon.addEventListener("click",()=>{
//     console.log("dwdw");
// })

//when we use arrow function in the eventlistner and log(this) inside the it then it would be pointing to window object
// we we use simple function in the eventlistner and log(this ) inside then it would be pointing to the button



//event object 
// in simple words js engine execute the code line by  line 
// browser = jsengine + extra features
// browser = js engine + webAPI

// so when a event listner is performed then the browser send the call backfunction to the js engine 
// and also send the information of the event in the form of object these could be seen below 


// currentTarget and target


// const buttuon = document.querySelector(".btn");
// buttuon.addEventListener("click",function(e){
//     console.log(e.currentTarget);
//     console.log(this);
// })





//behind the scenes of Events
// const btn = document.querySelectorAll(".Home button");
// console.log("start exte")
// btn.forEach( button => {
//     button.addEventListener("click",function(e){
//         let num =0;
//         for(let i =0;i<100000000;i++){
//             num+=i;
//         }
//         console.log(e.currentTarget.textContent , num);
//     })
// });

// let outervar=0;
// for(let i =0;i<100000000;i++){
//     outervar+=i;
// }
// console.log("outervaku is ",outervar)
// console.log("end exe")


// This phenomenon happens because of event loop , callback queue and browser 

// SO the browser has two things js engine(which has control stack or execution stack ) and web apis(which manages task like timeout,events etc..)

//so when ever code is executed line by line it goes through execution stack 
// but when things like event listner gets executed the stack request the webapi to handle it 
// so the webapi constanly check wether the event is being performed or not
// when performed then webapi  sent callbackfunction to callbackqueue / eventloop that checks wether the stack is empty or not
// when the js performs all the normal code then the callback function from the eventloop is sent to stack for execution


// const bt1= document.querySelector(".Home button");
// bt1.addEventListener("click",function(e){
//     console.log(e.currentTarget.textContent);
//        e.currentTarget.style.color = "red"
//     this.style.backgroundColor = "black";
// })


//keypress & mouseevent
// easy to learn when needed 



// event bubbling(event propogation)   and event capturing 

// when a event is performed and it has parent event listener added to it then it will also call the parent listner too
//this is known as event bubbling
   
// event capturing refers to when an event is performed then it goes from the top to the bottom or the place where it is being called

// the cycle refers to event capturing then event bubbling 

//example

// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");
// document.body.addEventListener("click",()=>{
//     console.log("boddy");
// })
// child.addEventListener("click",()=>{
//     console.log("bubble child");
// })
// parent.addEventListener("click",()=>{
//     console.log("bubble parent");
// })
// grandparent.addEventListener("click",()=>{
//     console.log("bubble grandparent");
// })

// child.addEventListener("click",()=>{
//     console.log("capture child");
// },true)
// parent.addEventListener("click",()=>{
//     console.log("capture parent");
// },true)
// grandparent.addEventListener("click",()=>{
//     console.log("capture grandparent");
// },true)
// document.body.addEventListener("click",()=>{
//     console.log("capture boddy");
// },true)




// so even though we just click on parent it calls the parent listner
// so if we just want to access the child part then we uses target  currentTarget in order to achive it 
// this is known as event deligation


// const grandparent = document.querySelector(".grandparent");

// grandparent.addEventListener("click",(e)=>{
//     console.log(e.target);
// })










