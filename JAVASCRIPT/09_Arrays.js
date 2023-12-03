/*
Array
Methods :- push , pop , splice , map , reduce , foreach 
Array destructring
set and map
spread and rest oprator
*/

// let nums = [];
// console.log(nums , typeof nums);  // [] objects

// let nums = [1,2,3,4,5];
// console.log(nums);  // [1,2,3,4,5]
// console.log(nums[3]);  // 4
// console.log(nums[5]);  // undefined
// nums[3] = 7;
// console.log(nums[3]);   // 7

// let values = [5 , "Ravi" , {"age" : 18} , function(){
//     console.log("Hello")}] ;
// console.log(values);
// values[3]();  // hello

 
// Insertion of element in array

// let arr = [1,2,5,4,7];
// console.log(arr);

// // Insertion at Beginning of Array
// arr.unshift(10);
// console.log(arr);


// // Insertion at End of Array 
// console.log(arr.push(8));   // 7
// console.log(arr);



// // Insertion at Middle 
// arr.splice(3,0,100);
// console.log(arr);

// console.log("deletion");

// let arr1 = [1,2,5,4,7];
// console.log(arr1);

// // Remove at Beginning of Array
// arr1.shift();
// console.log(arr1);


// // Remove at End of Array 
// console.log(arr1.pop());
// console.log(arr1);


// // Remove at Middle 
// arr1.splice(1,1);
// console.log(arr1);

// console.log(nums.length);

// let nums = [];
// nums[0] = 9;
// nums[99] = 4;

// // console.log(nums);  // [9, <98 empty items> ,4]

// for(let i in nums){
//     console.log(nums[i]);  // 9 4
// }

// for(let i of nums){
//     console.log(i);
// }

// for in loop work with index values of array
// for of loop work with values of array
// in case of array we always use for of loop

// let values = [9,5,3,4,7];
// delete values[0];
// console.log(values);  // [<1empty items> , 5 , 3 , 4 , 7]

// splice

// let values = [9,5,3,4,7];

// values.splice(0);
// console.log(values);  // [] -> empty

// values.splice(0,3);
// console.log(values);  // [4,7]

// values.splice(1,2,8);
// console.log(values);

// For Each loop

// let value = [9,5,3,4,7];
// value.forEach(num =>console.log(num));  // 9 5 3 4 7

//or

// let value = [9,5,3,4,7];
// value.forEach(function(num){
//     console.log(num);
// });  // 9 5 3 4 7

//filter functions
 
// let value = [9,6,3,4,7];

// value.forEach(num => 
//     {
//         if(num%2 ==0){
//             console.log(num);  // 6
//         }
// })


// let value = [9,6,3,4,7];
// value.filter(function(num){
//     return true;
// })
// .forEach(num => console.log(num));  // 9 6 3 4 7

// apply some filter

// let value = [9,6,3,4,7];
// value.filter(function(num){
//     return num % 2 === 0;
// })
// .forEach(num => console.log(num));  // 6 4

// let value = [9,6,3,4,7];
// value.filter(num =>num % 2 === 0)
// .forEach(num => console.log(num));  // 6 4

// let value = [9,6,3,4,7];
// let ans = value.filter(num => num % 2 === 0)
// console.log(ans);  // array [6 , 4]


// map functions

// let value = [9,6,3,4,7];
// value.filter(num => num % 2 === 0).map(function(num){
//     return num * 2;
// }).forEach(num => console.log(num));   // 12 , 8

// let value = [9,6,3,4,7];
// value.filter(num => num % 2 === 0)
//     .map(num => num * 2)
//     .forEach(num => console.log(num));   // 12 , 8

// let arr = [1,23,53,5,6,53,5,4,43,45,7,48,67,8,7,4,6,7,8,5];
// console.log(arr);

// Mapping Each Number to its corresponding Square
// let arrSquare = arr.map(val => val * val);
// console.log(arrSquare);

// console.log(arr);

// let objArray = arr.map(val => {return{"Element" : val}});
// console.log(objArray);


// reduce function

// let value = [8,6,3,4,2];

// let result = value.filter(num => num % 2 === 0)
//                 .map(num => num * 2)
//                 .reduce((sum,num) =>  sum + num , 0);
// console.log(result);

// let arr = [1,2,4,5,6];
// let sum = arr.reduce((totalSum,val) => totalSum + val,0);
// console.log(sum);


// structuring

// let a = 9;
// let b = 6;
// let c = 5;

// let value = [a,b,c]; // array structuring
// console.log(value);  // [9,6,5]


// destructuring

// let value = [9,6,3,4,7];
// let [a,b,c,d,e] = value;
// console.log(a,b,c,d,e);  // 9 6 3 4 7

// let value = [9,6,3,4,7];
// console.log(...value);   //destructuring using rest operators


// rest and spread operator

// function sum(a,b, ...nums){
//     console.log(nums);
//     let result = a + b;
//     for(let num of nums){
//         result = result + num;
//     }
//     return result;
// }
// let result = sum(4,5,8,9,3);
// console.log(result);

// function sum(a,b,c,d,e){
//     let result = a+b+c+d+e;
//     return result;
// }
// let nums = [4,5,8,9,3];
// let result = sum(...nums);  //  as an argument its spread operator
// console.log(result);


// split 

// let message = "My Name is Priyansh Patel";
// console.log(message);

// let arr = message.split(" ");
// console.log(arr);

// arr.forEach(e => console.log(e));