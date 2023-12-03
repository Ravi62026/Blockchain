// OBJECTS
console.log("OBJECTS");

// let point = {x:0 , y:1};
// console.log(point);
// let p2 = {x:point.x , y:point.y*6};
// console.log(p2);

// let book = {
//     "title" : "javascript",
//     "author" : "ravi",
//     "price" : 500,
//     "year" : 2023,
//     "num_copies" : 1000
// }
// console.log(book);
// console.log(book.title);

// let book = {
//     "title" : "javascript",
//     "price" : 500,
//     "author" : {
//         "fname" : "ravi",
//         "lname" : "shankar"
//     },
//     "year" : 2023,
//     "num_copies" : 1000
// }
// console.log(book);
// console.log(book.author);

// let book = new Object();
// book.title = "javascript";
// book.author = "ravi";
// book.pages = 400;
// book.publisher = "bloomsbury";
// book.year = 2023;

// console.log(book);
// console.log(book.title);
// console.log(book.author);
// console.log(book.year);
// book.year = 1997;
// console.log(book.year);
// console.log(book.pages);
// book["author"] ="mahadev";
// console.log(book.author);

// let obj1 = Object.create({x:1,y:2});
// console.log(obj1);
// let obj2 = obj1.x + obj1.y;
// console.log(obj2);

// let mycar = new Object();
// mycar.company = "BMW";
// mycar.model = "X5";
// mycar.year = 2020;
// mycar.color = "red";
// mycar.engine = "v8";
// mycar.price = 200000;
// mycar.mileage = 10;
// mycar.transmission = "automatic";
// mycar.condition = "new";
// mycar.fuel = "petrol";

// console.log(mycar);
// console.log(mycar.price);
// console.log(mycar.mileage);
// console.log(mycar.transmission);
// mycar.transmission = "manual";
// console.log(mycar.transmission);
// console.log(mycar);

// create a student object 

// method 1

// let student = {
//     "name" : "ravi",
//     "age" : 20,
//     "highest_education" : "b.tech",
//     "subjects" :{
//         "maths" : "A",
//         "science" : "B",
//         "english" : "C"
//     },
//     "marks_individual" : {
//         "math" : 90,
//         "science" : 80,
//         "english" : 70
//     },
//     "year_of_graduations" : 2027
// }
// console.log(student);

// method 2

// let student = new Object();
// student.name = "ravi";
// student.age = 20;
// student.highest_education = "b.tech";
// student.subjects = {
//     "maths" : "A",
//     "science" : "B",
//     "english" : "C"
// }
// student.marks_individual = {
//     "math" : 90,
//     "science" : 98,
//     "english" : 70
// }
// student.year_of_graduations = 2027;
// console.log(student);


// function Student(name , age , highest_education , subjects , marks_individual , year_of_graduations){
//     this.name = name;
//     this.age = age;
//     this.highest_education = highest_education;
//     this.subjects = subjects;
//     this.marks_individual = marks_individual;
//     this.year_of_graduations = year_of_graduations;
    // this.display = function(){
    //     console.log(this);
    // }
// }
// let student1 = new Student("ravi" , 20 , "b.tech" , {"s1" : "math" , "s2" : "science" , "s3" : "english"} , {maths : 90 , science : 80 , english : 70} , 2027);

// let student2 = new Student("raunak" , 20 , "b.tech" , {"s1" : "math" , "s2" : "science" , "s3" : "english"} , {maths : 90 , science : 80 , english : 70} , 2027);

// console.log(student1);

// console.log(student2);

// let obj = new Object();
// obj.age = 17;
// console.log(obj);
// console.log(obj.__proto__);