// class person{
//     constructor(name){
//         this.name=name;
//     }
//     greet(){
//         console.log(this.name);
//     }
// }

// // let person1 = new person("ravi");
// // console.log(person1);
// // person1.greet();

// class student extends person{
//     constructor(name){
//         console.log("this is a child class");
//         super(name);
//         this.name=name;
        
//     }
// }
// let student1 = new student("ravi");

// console.log(student1);
// student1.greet();


// class person{
//     constructor(name,occupation){
//         this.name=name;
//         this.occupation = "java developer";
//     }
//     greet(){
//         console.log(`${this.name}`);
//         console.log(`occupation is now ${this.occupation}`);
//     }
// }


// class student extends person{
//     constructor(name,occupation){
//         super(name,occupation);
//         this.name=name;
//         this.occupation = "Blockchain developer";
//     }
//     greet(){
//         console.log(`Hello student : ${this.name}`);
//         console.log(`occupation is now : ${this.occupation}`);
//     }
// }

// let obj1 = new person("Ravi shankar");
// obj1.greet();

// let obj2 = new student("Raunak Kumar");
// obj2.greet();

//function A -> object1 in parameter
//function B -> working with object1 or working with properties of function A

// Animal is the base function

// function animal(value){
//     let obj = {};  // create an empty object
//     obj.name = value.name;  // assign a new attribute to the object called as name
//     return obj;  // return the value of object
// }

// // Dog is the derived function

// function Dog(value){
//     let obj = animal(value);
//     obj.greet = function(){
//         return `Hello , ${obj.name}`;
//     }
//     return obj;
// }

// let myDog = Dog({name:"Snoopi"});
// console.log(myDog.greet());


// class person{
//     constructor(name){
//         this.name=name;
//     }
//     getName(){
//         return this.name;
//     }
//     static create(gender){
//         let name = gender==="male" ? "Ravi" : "Angle priya";
//         return new person(name);
//         // return name;
//     }
// }
// let name_gender = person.create("male");
// console.log(name_gender);

// let name_genderf = person.create("female");
// console.log(name_genderf);


// class Alien{
//     constructor()
//     {
//         let age,name;
//     }
//     setAge(age)
//    {
//         this.age = age;
//     }
//     setName(name)
//     {
//         this.name = name;
//     }
//     getAge()
//     {
//         return this.age;
//     }
//     getName()
//     {
//         return this.name;
//     }
// }

// let A = new Alien();
// A.setAge(20);
// A.setName("Ravi");

// console.log(A.getAge());
// console.log(A.getName());