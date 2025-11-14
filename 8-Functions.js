// *************** Creating Functions *******************

// a) Function Declaration

function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Talha"); // Hello, Talha!

// b) Anonymous Functions
// Functions without a name.Usually assigned to a variable or used as a callback.

let greetUser = function(name) {
    console.log("Hi, " + name + "!");
};

greetUser("Talha"); // Hi, Talha!

// c) Arrow Function (ES6)

let add = (a, b) => {
    return a + b;
};

console.log(add(5, 3)); // 8


// callback function

function func(num1,num2,operation){
    console.log(operation(num1,num2))
}
let subtraction = (a,b) =>{
    return a-b
}
func(1,2,subtraction)


