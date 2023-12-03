// 1 split operator

// let message = "My Name is Priyansh Patel";
// console.log(message);

// let arr = message.split(" ");
// console.log(arr);

// arr.forEach(e => console.log(e));

//2 join operator

// let arr2 = ["Ravi", "Shankar"];

// let message2 = arr2.join(" ");
// console.log(message2);

// 3 slice operator

// let arr = [1,2,3,4,5,6];
// console.log(arr);   // [ 1, 2, 3, 4, 5, 6 ]


// let newArray = arr.slice();
// console.log(newArray);  // [ 1, 2, 3, 4, 5, 6 ]

// newArray = arr.slice(0, -1);
// console.log(newArray);   // [ 1, 2, 3, 4 ]

// newArray = arr.slice(2,5);
// console.log(newArray);  // [ 3, 4, 5 ]

// 4 empty an array

// Three wAys 

// #1 - arr - []
// let arr = [1,2,5,4,7];
// console.log(arr);

// let arr1 = arr;

// arr = []
// console.log(arr); //Empty
// console.log(arr1);


// // #2 - length = 0 
// let arr2 = arr1;
// arr1.length = 0;
// console.log(arr1);
// console.log(arr2);

// // #3 - splice 
// let array = [1,5,6,7,8,9];
// console.log(array);

// array.splice(0,array.length);
// //or
// array.splice(0);
// console.log(array);

// 5 combine / concat 

// Combines two array
// let first = [1, 2, 3, 4];
// let second = [4, 3, 2, 1];

// console.log(first, second);

// let combine = first.concat(second);
// console.log(combine);


// 6 reverse 

// let first = [1, 2, 3, 4];
// console.log(first);

// let reverse = first.reverse();
// console.log(reverse);


// 7 sort array

// let arr = [10,45,30,46,5,14,67,46];
// console.log(arr);

// arr.sort();
// console.log(arr); // This sort function sort as a string 

// // so we have to sort by callback function 
// let sortedArray = arr.sort((a,b) => a-b);
// console.log(sortedArray); 


// 8 chaining

// let arr = [1,2,3,4,5,6];
// let chain = arr.filter(val => val > 2).map(num => num*num).filter(val => val&1);
// console.log(chain);