// 2. while Loop
// Use when the number of iterations is unknown 
// or depends on a condition that may change dynamically.

let i = 1;
while(i <= 5){
    console.log("Iteration " + i);
    i++;  // important to increment, otherwise infinite loop
}

// Best Example

let number;
while (number !== 5) {
    number = Math.floor(Math.random() * 10); // generate new number each time
    console.log("Generated number:", number);
}
console.log("Number 5 matched! Loop ended.");


