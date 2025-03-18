//Sets
// store data 
// no index based access
// unique items only (no duplicate allowed )
// order is not guranteed

//syntax
// const item = ['item1','item2','item3'];
// const num = new Set("abc");
// num.add(1);
// num.add(2);
// num.add(4);
// num.add(3);
// num.add(5);
// num.add("abc"); 
// num.add(item);
// console.log(num);

// const arr = [1,2,3,2,5,4,2,1];
// const myset = new Set(arr);
// console.log(myset);
// console.log(myset.has(1));




//Maps 




//objects in javascript can be either string or symbol, if other then js implicilty converts it to string 
// let obj ={
//     fname:"vandan",
//     age:13,
//     1:"one"
// }
// console.log(obj["1"]);

 
//map stores key value pair
//Diff btwn map and obj is that map can store key of any data type 
//map is iterable

// const person = new Map();
// person.set("key","value");
// person.set("name","vandan");
// person.set(2,'two');
// person.set([1,2,3],"123");

// console.log(person.get(2));
// console.log(person.keys());
// console.log(person);
// for(let i of person.keys()){
//     console.log(person.get(i));
// }
// for(let i of person){
//     console.log(i); 
// }


// for(let [key,val]of person){
//     console.log(key,val);
// }


//other operations using map

// let obj = {
//     name:"van",
//     age:1
// }
// let obj2 = {
//     name:"vaaan",
//     age:3
// }
// let mymap = new Map();
// mymap.set(obj,{
//     add:"new are",
//     city:"gan"
// })
// mymap.set(obj2,{
//     add:"new are",
//     city:"gan"
// })


// const ans = mymap.keys();
// for(let i of ans){
//     console.log(mymap.get(i).city);
// }
// console.log(mymap);
// console.log(mymap.get(obj).city);



//clone object 
//1st way
// let obj1={
//     name:"vaa",
//     roll:123
// }
// let obj2 = {...obj1  };
// obj1.city='gan';
// console.log(obj1)
// console.log(obj2)


//2nd way (clone using object assign)
// const obj2= Object.assign({},obj1);



//optional chaining 
// const user={
//     fname:"vanda",
//     // add:{city:'agadn'}
// }
// console.log(user?.add?.city);



//methods
//this refers to current object
// let obj ={
//     firstname:"vandan",
//     age:18,
//     about:function(){
//         console.log(`person name is ${this.firstname} and age is ${this.age}`);
//     }
// }
// obj.about();




// call ,apply ,bind method


//call method
// explicilty if you want to control the flow or context


// function myfunc(){
//     console.log("hellow");
// }
// myfunc.call();



// const user1={
//     firstname:"ca",
//     age:12,
//     about:function(hobby){
//                 console.log(`person name is ${this.firstname} and age is ${this.age}`,hobby);
//             }
// }
// const user2={
//     firstname:"va",
//     age:15,
// }
// user1.about.call(user2,'guitar');




//apply (same like call but extra arguments are passed as array)
// about.apply(user1,['guitar'])


//bind method(it returns a function)
// const func= user1.about.bind(user2,'loola');
// func();




//arrow function and this 
//it refers to the outer sorrounding 
// let obj = {
//     firstname:"dwdwd",
//     age:8,
//     about:()=>{
//         console.log(this.firstname,this.age);
//     }
// }
// obj.about();



//short syntax

// const user1={
//     firstname:"ca",
//     age:12,
//     about(hobby){
//                 console.log(`person name is ${this.firstname} and age is ${this.age}`,hobby);
//             }
// }
// console.log(user1);



// const obj ={
//     about:function(){
//         console.log(this.firstname , this.age);
//     },
//     isage:function(){
//         console.log(this.firstname , this.age);

//     }
// }
// const user={
//     firstname:"vandan",
//     age:1221221221
// }

// const user2={
//     firstname:"vn",
//     age:1
// }
// const ans =obj.about.bind(user);
// ans();
// obj.about.call(user);
 



 
  
//create object, channing , __proto__ , why its needed ?

//creating object using object.create
// let obj1={
//     aa:"cwcw",
//     bb:"wdwd"
// }
// let obj2= Object.create(obj1);
// console.log(obj2.aa);
// console.log(obj2.__proto__)
// obj2.aa="ooooo";
// console.log(obj2)




// let myfucn={
//     about:function(){
//         console.log(`name is ${this.firstname}`)
//     },
//     isage:function(){
//         console.log("age is",this.age);
//     }
// }
// let createobj = function(firstname,age){
//     const user =Object.create(myfucn);//rather than storing methods for every user, it stores the reference 

//     user.firstname=firstname;
//     user.age=age;
//     return user;
// }
// const u1=createobj("van",22);
// u1.about();
// console.log(u1);



//Prototype 
// js function--> function + object
//in js function acts as a method and also as a object meaning it can have its own property 


// function hello(){
//     console.log("dwd")
// }
// hello.property = "dwdwdw";
// console.log(hello.property); 

//also it provides free space --> {}

// console.log(hello.prototype)


//only functions provide prototype property

// in simple words prototype is a free space provided by the function where we can store some properties 
//so rather than creating an object and storing a reference we can use prototype
// the proto will be refering to the prototye meaning if any method is not available in object it will check the prototype



// let createobj = function(firstname,age){
//     const user =Object.create(createobj.prototype);//rather than storing methods for every user, it stores the reference 

//     user.firstname=firstname;
//     user.age=age;
//     return user;
// }

//         createobj.prototype.about=function(){
//             console.log(`name is ${this.firstname}`)
//         }f
//         createobj.prototype.isage=function(){
//             console.log("age is",this.age);
//         }

// const u1=createobj("van",22);
// u1.about()








// function hello(){
//     console.log("dwd")
// }
// hello.abc="dwdw";

// hello.prototype.abc="qqq";
// console.log(hello.abc)
// console.log(hello)




















//new keyword
//1. empty object this={}
//2. return this
//3. sets proto as prototype

// constructor function(by convention it start with capital letter)


//Constructor function
// function CreateUser(firstname,age){

//         this.firstname=firstname;
//         this.age=age;
// }
// CreateUser.prototype.about=function(){
//     console.log(this.firstname)
// }
// CreateUser.prototype.isage=function(){
//     console.log(this.age)
// }
// const u1 =  new CreateUser("aaa",2);
// u1.about()
// console.log(u1)

// in ecmascript __proto__ === [[prototype ]]






//class keyword

// class Animal{
//     constructor(name,age){
//         this.firstname=name,
//         this.age=age 
//     }
//     eats(){
//         console.log("eats grass");
//     }
// }
// const horse = new Animal("dd",12);
// console.log(horse);

    















