/*
oops concept
abstractions
inheritence
pass by value and reference
coding practice
*/

// class person{
//     constructor(name){
//         this.name=name;
//     }

//     greet(){
//         console.log(`hello ${this.name}`);
//     }
// }

// let person1 = new person("Ravi Shankr");
// person1.greet();


// class person{
//     constructor(name,age,high_qual,desig,city,nationality,salary,gender){
//         this.name=name;
//         this.age=age;
//         this.high_qual=high_qual;
//         this.desig=desig;
//         this.city=city;
//         this.nationality=nationality;
//         this.salary=salary;
//         this.gender=gender;
//     }
//     greet(){
//         console.log(`hello ${this.name}`);
//     }
// }

// let person1 = new person("Ravi" , 19 , "B.Tech" , "blockchain developer" , "bihar" , "indian" , 1000000 , "male");
// console.log(person1);
// person1.greet();


// class person{
//     constructor(name,age,high_qual,desig,city,nationality,salary,gender="F"){
//         this.name=name;
//         this.age=19;
//         this.high_qual=high_qual;
//         this.desig=desig;
//         this.city=city;
//         this.nationality=nationality;
//         this.salary=salary;
//         this.gender=gender;
//     }
//     greet(){
//         console.log(`hello ${this.name}`);
//     }
// }

// let person1 = new person("Ravi" , 19 , "B.Tech" , "blockchain developer" , "bihar" , "indian" , 1000000 , "male");
// console.log(person1);
// person1.greet();

// class student extends person{
//     constructor(name,age,high_qual,desig,city,dob){

//         // super -> points to the constructor of the parent class
//         //using super -> the derived class mimics behaviour of parents class
//         super(name,age);
//         this.name=name;
//         this.age=age;
//         this.high_qual=high_qual;
//         this.desig=desig;
//         this.city=city;
//         this.dob=dob;
//     }

//     greet_student(){
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.high_qual);
//         console.log(this.desig);
//         console.log(this.city);
//         console.log(this.dob);
//     }
// }

// let student1 = new student("Raunak" , 19 , "B.Tech" , "blockchain developer" , "bangalore" , "indian" , 10000 );

// console.log(student1);

// let student1 = new student("Raunak" , 19 , "B.Tech" , "blockchain developer" , "bangalore",2004);

// student1.greet_student();

// class child extends student{

// }

// let child1 = new child("kiran" , 19 , "B,Tech" , "blockchain developer" , "bangalore" , "indian" , 10000 ,8);

// console.log(child1);
// child1.greet();

//parent class -> prson
//1 child class -> student -> behave exactly like person class
//2 child class -> child -> behave exactly like student classm -> behave exactly like person class


/*

create a car class -> name , brand , company , total_sals

child class -> engine , transmission , suspension , seating , price , yol

*/

// class car{
//     constructor(name , brand , company , total_sals){
//         this.name=name;
//         this.brand=brand;
//         this.company=company;
//         this.total_sals=total_sals;
//     }
// }

// class child extends car{
//     constructor(engine="1000cc" , transmission , suspension , seating = 4 , price = 10000 , yol){
//         super(engine,transmission,suspension,seating,price,yol);
//         this.engine=engine;
//         this.transmission=transmission;
//         this.suspension=suspension;
//         this.seating=seating;
//         this.price=price;
//         this.yol=yol;
//     }

//     get_details(){
//         console.log(this.name);
//         console.log(this.brand);
//         console.log(this.company);
//         console.log(this.total_sals);
//         console.log(this.engine);
//         console.log(this.transmission);
//         console.log(this.suspension);
//         console.log(this.seating);
//         console.log(this.price);
//         console.log(this.yol);
//     }

//     get_details_M2(){
//         console.log(`The properties of the car and child class are ${this.name} ${this.brand} ${this.company} ${this.total_sales} ${this.engine} ${this.transmission} ${this.suspension} ${this.seating} ${this.price} ${this.yol}`)
//     }
// }

// let car1 = new car("swift" , "maruti" , "india" , "1000000");
// console.log(car1);

// let child1 = new child("petrol" , "manual" , "hard" , "4" , "1000000" , "10");
// console.log(child1);

// child1.get_details();
// child1.get_details_M2();

