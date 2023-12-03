"use strict"

// note -> Arrow function at line number 344

// Function of add two numbers 

// function addTwoNumbers(a,b)
// {
//     let sum = a+b;
//     return sum; 
// }

// let num1 = Math.round(Math.random() * 1000);
// let num2 = Math.round(Math.random() * 1000);
// console.log(addTwoNumbers(num1,num2));

// Hoisting 

// // Not declared but it gives output 
// console.log(sum(10,45)); // 55

// function sum(a,b)
// {
//     return a+b;
// }

// In Variables it is happens with only var varible 
// let and const type variable also have hoisting but not declare by undefined just like var

// console.log(x) //undefined
// var x;
// x = 10;

// // Now Try Let 
// console.log(y) //access b4 intialization that mean it top the declaration but not intialize it with undefined

// let y;
// y = 10;


// // Another Method = "use strict"
// //For Avoid this we use -  "use strict" at the top of file;
// i = 10;
// console.log(i); //10 not error


// // Now comes error 


// // Function Assignment
// let add = function addTwoNumbers(a,b)
// {
//     let sum = a+b;
//     return sum; 
// }

// let num1 = Math.round(Math.random() * 1000);
// let num2 = Math.round(Math.random() * 1000);
// console.log(add(num1,num2));   


// let add = function (a,b)
// {
//     let sum = a+b;
//     return sum; 
// }

// let num1 = Math.round(Math.random() * 1000);
// let num2 = Math.round(Math.random() * 1000);
// console.log(add(num1,num2));


// let add = (a,b) =>
// {
//     let sum = a+b;
//     return sum; 
// }

// let num1 = Math.round(Math.random() * 1000);
// let num2 = Math.round(Math.random() * 1000);
// console.log(add(num1,num2));   


// let add = function addTwoNumbers(a,b)
// {
//     console.log(arguments);
//     let sum = 0;
//     for(let key of arguments)
//         sum += key;
//     return sum; 
// }

// let num1 = Math.round(Math.random() * 100);
// let num2 = Math.round(Math.random() * 100);
// let num3 = Math.round(Math.random() * 100);
// let num4 = Math.round(Math.random() * 100);
// let num5 = Math.round(Math.random() * 100);
// let num6 = Math.round(Math.random() * 100);
// let num7 = Math.round(Math.random() * 100);
// let num8 = Math.round(Math.random() * 100);

// console.log(add(20,30,num3,num4,num5,num6,num7,num8));


// let add = function addTwoNumbers(a,b,...args) 
// {
//     console.log(args);
//     let sum = 0;
//     for(let key of args)
//         sum += key;
//     return sum; 
// }

// let num1 = Math.round(Math.random() * 100);
// let num2 = Math.round(Math.random() * 100);
// let num3 = Math.round(Math.random() * 100);
// let num4 = Math.round(Math.random() * 100);
// let num5 = Math.round(Math.random() * 100);
// let num6 = Math.round(Math.random() * 100);
// let num7 = Math.round(Math.random() * 100);
// let num8 = Math.round(Math.random() * 100);

// console.log(add(num1,num2,num3,num4,num5,num6,num7,num8));   


// // let simpleInterest = (P , T=2 , R) => {return(P*T*R)/100};
// // After Default parameter all remaining parentheses must be empty 
// let simpleInterest = (P , T , R=10) => {return(P*T*R)/100};

// console.log(simpleInterest(1000,4,40)); // 1600
// console.log(simpleInterest(1000,4)); // 400



// // getter -> acess properties
// // settr -> change (mutate) 

// let person = {
//     firstName : "Priyash",
//     lastName : "Patel",

//     // Getter
//     get fullName()
//     {
//         return person.firstName + " " + person.lastName;
//     },

//     // Setter
//     set fullName(value)
//     {
//         let name = value.split(" ");
//         this.firstName = name[0];
//         this.lastName = name[1];
//     }
// }

// console.log(person.fullName);
// person.fullName = "Khushi Patel";
// console.log(person.fullName);



// let person = {
//     firstName : "Priyash",
//     lastName : "Patel",

//     // Getter
//     get fullName()
//     {
//         return person.firstName + " " + person.lastName;
//     },

//     // Setter
//     set fullName(value)
//     {
//         if(typeof value !== 'string')
//         {
//             throw "You must pass a string";
//         }
//         let name = value.split(" ");
//         this.firstName = name[0];
//         this.lastName = name[1];
//     }
// }

// console.log(person.fullName);
// person.fullName = "Khushi Patel";
// console.log(person.fullName);

// try{
//     person.fullName = true;
// }
// catch(e){
//     // console.log(e);
//     alert(e);
// }



// // Three wAys to create variable

// // #1

// console.log("var");
// var a = 10;
// console.log(a);

// a = 20;
// console.log(a);

// {
//   var a = 30;
// }
// console.log(a);

// // #2 - Let

// console.log("Let");
// let b = 10;
// console.log(b);

// // let b = 20; - Error
// b = 20;
// console.log(b);

// {
//   let ba = 40;
//   console.log(ba);
// }
// // console.log(ba); - Error

// // #3 
// console.log("const");

// const c = 10;
// console.log(c);

// // c = 20; //Error
// console.log(c);



// let person = {
//     firstName : "Priyash",
//     lastName : "Patel",

//     // Getter
//     get fullName()
//     {
//         return person.firstName + " " + person.lastName;
//     },

//     // Setter
//     set fullName(value)
//     {
//         if(typeof value !== 'string')
//         {
//             throw "You must pass a string";
//         }
//         let name = value.split(" ");
//         this.firstName = name[0];
//         this.lastName = name[1];
//     }
// }

// console.log(person.fullName);
// console.log(person.fullName);

// try{
//     person.fullName = "Khushi Patel";
//     // person.fullName = true;
// }
// catch(e){
//     // console.log(e);
//     alert(e);
// }
// finally{
//     console.log(person.fullName);
// }


// Function

// function dosomething()  // defining
// {  
//     let name = "Ravi";
//     console.log(name);
// }
// dosomething();  // calling

// function add(){
//     let num1 = 4 ;
//     let num2 = 5 ;
//     let sum = num1 + num2;
//     return sum;
// }
// let result = add();
// console.log(result);

// function add2(a,b){
//     let sum = a + b ;
//     return sum;
// }
// let sum = add2(6,7);
// console.log(sum);

// assigning function

// function add(n1 , n2){
//     return n1 + n2;
// }

// let sum = add;
// let result = sum(10,20);
// console.log(result);

// let sum = function add(n1 , n2){
//     return n1 + n2;
// }

// let result = sum(10,20);
// console.log(result);

// anonymous function assigning

// let sum = function (n1 , n2){
//     return n1 + n2;
// }

// let result = sum(10,20);
// console.log(result);

// let add = function()
// {
//     console.log("in add");
// }
// add();

// let add = function(n1 , n2){
//     return n1+n2;
// }
// let result = add();
// console.log(result);  // NAN


// Arrow function

// let add = (n1 , n2)  =>  n1 + n2;

// let result = add(10,20);
// console.log(result);


// let print = a => a

// console.log(print(10));




