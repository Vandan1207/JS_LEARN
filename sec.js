//Functions , resuable part of the code
//Declaration

// function happybday(){
//     console.log("Happy Birthday");
// }

//functions are overrided in js , the one with the latest  
// function sum(a,b){
//     return a+b;
// }

// console.log(sum(4,5));

// function sum(a,b,c){
//     return a+b+c;
// }
// console.log(sum("l",2,3));

// Thus the functions are overriden then it will give output as NaN and l23


// function LinearSearch(arr,target){
//     for(let i =0;i<arr.length;i++){
//         if(arr[i]==target){
//             return i;
//         }
//     }
//     return -1;
// };
// let arr = [2,3,4,6,5,7];
// console.log(LinearSearch(arr,5));



//function Expression

// const happybday= function(){
//     console.log("Happy Birthday");
// }; 
// console.log(happybday);


//Arrow Functions
// const happybday=()=>{
//     console.log("happy birthday");
// };


// const isEven = (a)=>{
//     return a%2==0;
// }
// console.log(isEven(6)); 

// const isEven= a => a%2==0;


//Hoisting (later ) 

// hello();
// var hello = function(){
//     console.log("Hello world ");
// // }
// function hello(){
//     console.log("Hello world ");
    
// }

//function inside function

// const hello=()=>{
//     const myfunc=()=>{
//         console.log("mfunc");

//     }
//     myfunc();
//     console.log("hellow");
// }
// hello();


//lexical scope 
// let and const are block scope 
// var is function scope 


//default parameter
// function addnum(a,b=0){
//     return a+b;
// }

// console.log(addnum(2,2));


//rest parameter

// function myfunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
//     console.log(Array.isArray(c));
// }

// myfunc(1,2,3,4,5,6,7);

// function addfun(...a){
// let sum =0;
    
//     for(let i of a){
//         sum+=i;
//     }    
//     return sum;
// }
// console.log(addfun(1,2,3,4,5));


//parameter destructing (used with object and usage is in React )

// const obj ={
//     firstname:"vandan",
//     gender:"male",
//     age:56
// }

// function example({firstname,age:myage }){
//     console.log(myage);
//     console.log(firstname);
// }
// example(obj);




//callback function (takes function as an input)
// function myfunc (string ){
//     console.log("inside myfunc ");
//     console.log(`your name is ${string}`);
// }

// function mufunc2(a){
//     //sql qurey --> returns data 
//     console.log("inside myfunc 2");
//     a("vandan");

// }

// mufunc2(myfunc);


//function returing function

// function a(){
//     function b(){
//         return "inside b";
//     }
//     return b;
// }
// const ans =a();
// console.log(ans());

//These type of function inside a function or function returning function is known as higher order function
// function myfun(a){
//     a();
//     return function b ()
//         {
//         return "inside b";
//     }

// };
// function myfunc2(){
//     console.log("hellow myfunc2");
// };

// const ans =myfun(myfunc2);
// console.log(ans());


//important array method 

//forEach method 
// it is a callback function meaning it takes a function as passes two these as a argument , 1.element ,2. index
// const arr =[1,2,3,4,8];
// arr.forEach((element,index)=>{
//     console.log(element*2 , "index is ",index);
    
// })

  
// const user=[
//     {firstname:"oo",age:23},
//     {firstname:"qq",age:323},
//     {firstname:"pp",age:3},
// ]

// user.forEach((ele)=>{
//     console.log(ele.firstname);
// })






//map method (it returns an array , also it gives the same parameters as map)

// const arr=[
//     {firstname:"vandna",age:33},
//     {firstname:"va",age:303},
//     {firstname:"ndna",age:3},
// ];
// const ans =arr.map((ele)=>{
//     return ele.firstname;
// })
// console.log(ans);


//filter method (return boolean value)

// const arr=[1,2,3,4,5,6];
// const ans =arr.filter((ele)=>{
//     return ele%2==0;
// })
// console.log(ans);




//reduce method 
// const arr =[1,2,3,4,5];
// const ans =arr.reduce((acc,curr)=>{
//     console.log(acc+curr);
//     return acc+ curr;

// })
// console.log(ans);


// const arr=[
//     {productname:"lap",price:30000},
//     {productname:"latopp",price:80000},
//     {productname:"lappppp",price:900},
// ]
// const ans =arr.reduce((acc, curr)=>{
//     return acc+curr.price;
// },0);
// console.log(ans)
 
//sort (in javascript it sorts the value based on ascii value)

// const arr =[322,2500,40,7840,5090];
// arr.sort((a,b)=>{
//     return a-b;
// })
// console.log(arr);


// let arr =[1,2,3,4,5,6,7,8]
// arr.copyWithin(1,3,6)
// console.log(arr);


//usage 
//high to low 
// const arr=[
//     {productId:1,price:302},
//     {productId:2,price:3000},
//     {productId:3,price:200},
//     {productId:4,price:70000},
// ];
// arr.sort((a,b)=>{
//     return b.price- a.price;
// });
// console.log(arr);
 

//find method (will return the first occurence of the answer)



// const arr=['dog',"cat","frog"];

// let app = arr.filter((ele)=>{
//     return ele.length==3;
// })
// console.log(app)

// const ans =arr.find(ele=>ele.length===3)
// console.log(ans);
 


// every method ( it will return also true and false in combined)

// const num=[2,4,6,8];
// const ans = num.every((nums)=> nums%2==0);
// console.log(ans);

//example 
// const arr=[
//         {productId:1,price:302},
//         {productId:2,price:3000},
//         {productId:3,price:200},
//         {productId:4,price:70000},
//     ];
// const ans = arr.every(ele=>ele.price>100);
// console.log(ans);





//some method (checks if one element satisfy the condition)

// const num =[1,2,3,4,5,7,6];
// const ans = num.some(ele=>ele%2==0);
// console.log(ans);

//fill method
// value , start-index , end-index (not included)

// const arr = new Array(10).fill(-1);
// console.log(arr);

// const arr = [1,2,3,4,5,6,7,8];
// arr.fill(0,1,4);
// console.log(arr);




//splice method 
// start(index), delete(no of elements), insert


// const arr=['item1','item2','item3','item4','item5','item6'];
// arr.splice(2,4);
// console.log(arr);


// const arr=['item1','item2','item3','item4','item5','item6'];
// arr.splice(2,0,'item69');
// console.log(arr);

// const arr=['item1','item2','item3','item4','item5','item6'];
// arr.splice(1,3,'item000','item0001');
// console.log(arr);























//Trick Question
// let a = 5;
// const b = 10;
// let c = () => {
//      b = 4;
//     console.log(b);
// }
// c();


