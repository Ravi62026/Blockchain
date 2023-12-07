// function display(){
//     console.log("hey")
//     console.log("how")
//     console.log("are")
//     console.log("you")
// }

// display();

function *display(){   // it became a generator function
    console.log("hey");
    // yield "First Pause";
    console.log("how");
    yield "Second Pause";
    console.log("are");
    yield "Third Pause";
    console.log("you");
    yield "Fourth Pause";
}

let control = display();
// control.next();
// control.next();
// control.next();
// control.next();

console.log(control.next());
console.log(control.next());
