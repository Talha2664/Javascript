// *********************** Rest Operators ************************
// Break array and object collect it in variables 

// used for Function parameters & destructuring

// Rest with Function Parameters

function sum(...numbers) { // Rest collects all arguments into an array called numbers.
    console.log(numbers);
}
sum("talha","mughal","yasir","rana");
// Output:
[1, 2, 3, 4]  //output is in array form because i use rest operator



// Object Destructuring + Rest Operator

let user = { name: "Talha", age: 21, city: "Lahore" };

let { name, ...others } = user;

console.log(name);   // Talha
console.log(others); // { age: 21, city: "Lahore" }