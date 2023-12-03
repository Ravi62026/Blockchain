// callbacks , higher-order functions , closure

/*
console.log("Welcome");
function print(){
    console.log("Get Lost");
}
print();
*/

// console.log("Welcome");

// setTimeout(function print(){
//     console.log("Get Lost");
// } , 2000);   // generate output after 2 seconds


// function x()
// {
//     function y()
//     {
//         console.log("In y");
//     }
//     console.log("In x");
//     y();
// }
// x();

// Functional programming -> Functions are the first class citizens

// function add(a,b,handle){
//     let result = a + b;
//     handle(result);
//     print(result)
// }

// function print(result){
//     console.log("printing" , result);
// }
// function sendReques(result){
//     console.log("send data to server" , result);
// }

// add(4,5,sendReques);


// function outer(){
//     console.log("outer");
//     return 5;
// }
// let result = outer();
// console.log(result);

/*
function outer(){
    let num = 20;
    console.log("outer" , num);
    return function()
    {
        console.log("Inner" , num);
    };
}
let result = outer();
result();
*/

/*
function outer(){
    let num1 = 20;
    console.log("outer" , num1);
    return function(num3){
        let num2 = 10;
        console.log("inner" , num2 , num1 , num3);
    };
}

let result = outer();
result(30);
*/

