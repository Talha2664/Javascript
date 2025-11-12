// 1. for Loop

for (let i = 1; i <= 5; i++) {
    console.log("Iteration " + i);
}


// 2. while Loop

let i1 = 1;
while(i1 <= 5){
    console.log("Iteration " + i1);
    i1++;  // important to increment, otherwise infinite loop
}


// 3. do...while Loop

let i = 1;
do {
    console.log("Iteration " + i);
    i++;
} while (i <= 5);


// 4. for...in Loop

let student = {name: "Talha", age: 23, cgpa: 8.0};

for (let key in student) {
    console.log(key + ": " + student[key]);
}


// for...of Loop

let colors = ["red", "green", "blue"];

for (let color of colors) {
    console.log(color);
}