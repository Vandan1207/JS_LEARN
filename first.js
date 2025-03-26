
'use strict'
// This is the first line of code 


// console.log('hello worl');

// Variable 
// var fristname ="hello world";
// console.log(fristname);

// var fristName = "vandan";
// console.log(fristName)  ;

// var val1= 2; 
// console.log(val1*"10");


// var first_name="vandan"; // snake case writing 
// var firstName ="vandan"; // camel case writing 

//let keyoword
// let firstname = "vandan";
// cannot declared let twice like var
// let firstname ="vansh";

// console.log(firstname);

//Main difference between var and let (block scope vs function scope)

//constants
//can't be changed 
// const pi= 3.14;f
// console.log(pi);

// String indexing 

// v a n d a n 
// 0 1 2 3 4 5

// let firstname = "vandan";

// // console.log(firstname[5]);
// console.log(firstname.length);
// console.log(firstname[firstname.length-1]);

//String method
// Strings are immutable

// let firstname ="vaNDan";
// firstname.trim();
// console.log(firstname);// didn't changed because string are immutable
// console.log(firstname.trim());
// console.log(firstname.toUpperCase());
// console.log(firstname.toLowerCase());

// console.log(firstname.slice(0,5));//end index not included 
// console.log(firstname.slice(1));// start index till end

//operator 
    // data types 
    //string , number, boolean, undefined , null , BigInt , Symbol
// console.log(typeof 5);
// let namee="va";
// console.log(typeof namee);

//convert number to string 
// let age =5;
// age = age +"";
// console.log(typeof age);
// age = String(age);
// console.log(typeof age)

// String to number 

// let mystr = +"34";
// console.log(typeof mystr);

// let mystr ="L";
// mystr=Number(mystr);
// console.log(typeof mystr)
// console.log(mystr);
// console.log(typeof NaN);

// String concatenation

// let str1 ="vandan";
// let str2= "thakkar";
// let fullname = str1+" "+str2;
// console.log(fullname);

// Que1
// let str1="14";
// let str2 ="10";
// let newStr = str1 +str2;
// console.log(newStr);

//que2
// let str1="14";
// let str2 ="10";
// let newStr = +str1+ +str2+2 ;
// console.log(newStr);
// console.log(typeof newStr);
// newStr = +str1+ +"" +str2+2 ;
// console.log(typeof newStr);
// console.log(newStr);

//template String 
// let age=22;
// let name = "vandan";
// let aboutme = `my name is ${age} and my name is ${name}`;
// console.log(aboutme);

//undefined 
// let firstname;
// console.log(typeof firstname,firstname);
// firstname="vandan";
// console.log(typeof firstname,"is",firstname);

//null 
// let b = null;
// console.log(b);
// console.log(typeof b); --> it will give object (bug, error)

//BigInt 
// syntax
// let num1 =BigInt(12);
// let num2 = 12n;
// console.log(num1,num2,typeof num1, typeof num2);
// console.log(Number.MAX_SAFE_INTEGER);

// let n1 =12n;
// let n2 = 5;
// console.log(n1+n2); // error , can't use bigint with other data type 
// console.log("5" + 5);



//boolean & comparison operator 
// console.log(5>=5); //<= , == , >= , > , <
// console.log(5!=5);

// == vs ===
// console.log("7"==7); // only value not datatype
// console.log("7"===7); // both value and datatype 


 

//if else condition
// let age = 17;
// if(age>17){
//     console.log("drive");
// }else{
//     console.log("don't drive");
// }

// let num =18;
// if(num%2 === 0){
//     console.log("even");

// }else{
//     console.log("odd");
// }

//  falsy value

// ( false ,  0, null , undefined, "")

// let firstnmae;
// if(firstnmae){
//     console.log(firstnmae);
// }else{
//     console.log("first name is kinda empty");
// }


//ternary operator 

// let age = 8;
// let drink = age>5 ? "coffee":"milk";

// and or operator
 
// let age =8;
// let name ="vandan";
// if(name[0]=="v" && age>7){
//     console.log("ok");
// }
// if(name[0]="k"|| age>7){
//     console.log("ok");
// }


//prompt 
// let num =19;
// let userguess = prompt("guess a number ");
// userguess= +userguess;
// console.log(typeof userguess,userguess);

// switch
// let age=19;

// switch(age){
//     case 18:
//            console.log("yes");
//             break;
//     case 10:
//             console.log("no");
//             break;
//     default:
//         console.log("hello world"); 
// }

//while loop 
// let i =0;
// while(i<10){
//     console.log("hello world",i);
//     i++;
// }

// let num =10;
// let sum=0;
// let i=0;
// while(i<=num){
//     sum+=i;
//     i++;
// }
// console.log(sum);

//for loop 
// let sum=0;
// for( let i =0;i<=10;i++){
//     sum+=i;
// }
// console.log(sum);


// Array (collection of elements)
// Refrence type (object)

// let fruits=['apple',"mango",`grapes`];
// console.log(fruits[2]);
// let mixed=["apple",2,2.3,null, undefined,true];
// console.log(typeof mixed);
// console.log(Array.isArray(mixed));

// Array Method 
//array push pop
// let arr=["apple","mango"];
// arr.pop();
// arr.push("kiwi");
// console.log(arr);



//unshift (slower than push)
// let arr=["apple","mango"];
// arr.unshift("kiwi");
// console.log(arr);

//shift(slower than pop)
// let arr=["apple","mango"];
// arr.shift();
// console.log(arr);

//Primitive vs Reference Type
//In primitive type changes are not reflected (stored inStack)
//In reference type changes are refelected (stored in Heap)

//clone array
// let arr1=[5,6];
// let arr2 = arr1.slice(0);
// arr1.push(3);
// console.log(arr1);
// console.log(arr2);

//another way

// let arr1=[5,6];
// let arr2=[].concat(arr1);   

//using sperad operator in array
// let arr1 = [5,4];
// let arr3 = [6,7,8]
// let arr2=[...arr1,...arr3];
// console.log(arr2);

//use const for creating array 
// const arr =[5,6];
// arr.push(7);
// console.log(arr);

// const arr1 =[1,2,3,4];
// const arr2=[...arr1,..."12334"];
// console.log(arr2);


//for of loop

// const arr= ["mango","orange","pineapple"];
// for(let fruit of arr){
//     console.log(fruit);
// }

//typesof output method 
// let a =5;
// let b= 6;
// console.log("value of my arr",a,"value of b",b);
// console.log("value of my arr"+a+"value of b"+b);
// console.log(`value of my arr${a}value of b ${b}`);


// array destructuring   
// const arr = ["value1","value2"];
// let[var1,var2]=arr;
// console.log(var1,var2);

//we can also use array destructing for assigining new array too
// const arr= ["v1","v2","v3","v4"];
// let[var1,var2,...newarr]=arr;
// console.log(newarr);



//for-of v/s for-in
//for-of iterates the vlaue is is used in array 
//for-in iterates the key, or index if it is array
 





//slice method
// let arr = ["v1","v2","v3","v4"];
// let newarr= arr.slice(2,4);
// console.log(newarr);


//objects(reference type)
//arrays are good but not sufficient for real world data 
// object store key value pair
//objects don't have index

//syntax
// const person ={name:"vandan",age:21,hobbies:["sleep","eat"]};
// console.log(person);
// console.log(person.hobbies[1]);
// console.log(person.name);

// //adding key value pair 
// person.gender="male";
// console.log(person)

//access data using[]
// const person ={name:"vandan",age:21,hobbies:["sleep","eat"],18:"loo"};
// console.log(person["name"]); // we write name in string format not directly becasue all the key(properties) are by default a string
// console.log(person["18"])

//adding using []

// person["gender"]="male";
// console.log(person);


//diff btwn [] vs .
// 1st diff (to access a property which have some spaces)
// const person ={name:"vandan",age:21,hobbies:["sleep","eat"],"color name":"yellow"};
// console.log(person["color name"]);

// 2nd diff (to insert key as a part of variable)
// const person ={name:"vandan",age:21,hobbies:["sleep","eat"],"color name":"yellow"};
// let key = "email";
// person[key]="vandan@gmail";
// console.log(person);


// iterate object
 
// const person ={name:"vandan",age:21,hobbies:[["sleep","eat"],["sleep","eat"]],"color name":"yellow"};
//1st way
// for(let key in person){
//     // console.log(person[key]);
    
//     console.log(key,":",person[key]);
    
// }

//2nd way
// console.log(Object.keys(person));
// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }



//computed properties
// passing as a reference 
// const key11="key1";
// const key22="key2";

// const val11="val1";
// const val22="val2";

// const obj1={key11:val11 , [key22]:val22};
// console.log(obj1);



//spread operator in object (it spreads the iterable) 

// const obj1 ={
//     val1:"key1",
//     val2:"key2",
    
// }
// const obj2 ={
//     val3:"key3",
//     val4:"key4",
//     val1:"keyooo"
// }
// const objNew={
//     ...obj1,...obj2
// };
// console.log(objNew); // it will override the key with the last occurence 



//object destructing 
// const band ={
//     bandName:"led ",
//     famousSong: "heaven",
//     year:9192,
//     age:12
// };
// const{bandName:var1,age,...obj}=band;
// console.log(age,var1,obj);
// // // var1 is variable name  inorder to change the variable name if you want 
// console.log(obj)

  
//objects inside in array
// const arr=[
//      {userId:1,name:"vand",gender:"male"}
//     ,{userId:2,name:"vandan",gender:"male"}
//     ,{userId:3,name:"vandtha",gender:"male"}

// ];
// for(let user of arr){
//     console.log(user  );
// }

// nested destructuring 

// const arr=[
//      {userId:1,name:"vand",gender:"male"}
//     ,{userId:2,name:"vandan",gender:"male"}
//     ,{userId:3,name:"vandtha",gender:"female"}
// ];

// const[{name:var1,userId:Id},user2,{gender:var2}]=arr;
// console.log(user2);
// console.log(var1);
// console.log(Id);
// console.log(var2);
