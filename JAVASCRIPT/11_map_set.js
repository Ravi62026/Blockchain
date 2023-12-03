/*

functional programming :- 
1. call back
2. higher order function
3. closure
4. memoization

Date methods

*/

// set

let set = new Set();
let array = new Array();
set.add(5);
set.add("Ravi");
set.add(true);
set.add({a:1,b:2});

// console.log(set);
// console.log(set.size);

// for(let i = 1 ; i <= 20 ; i++){
//     set.add(Math.round(Math.random()*100));
// }

// console.log(set);
// console.log(set.size);

// for(let i = 1 ; i <= 20 ; i++){
//     let num = Math.round(Math.random()*100);
//     array.push(num);
//     set.add(num);
// }
// console.log(set);
// console.log(array);
// console.log(set.size);
// console.log(array.length);


// map

// let map = new Map();  // set of keys and array value
// map.set("Ravi" , "Blockchain");
// map.set("chetan" , "Web Development");
// map.set("Raunak" , "Cyber security analyst");
// map.set("Ravi" , "Blockchain");  // repeatition of key not allowed

// console.log(map);
// console.log(map.keys()); // ravi , chetan , raunak
// console.log(map.values()); // blockchain , web development , cyber security analyst);

// map.forEach((value , key) => console.log(key , value));

// let value = [3,4,5,6,8];
// value.forEach((value , index) => console.log(index , value));