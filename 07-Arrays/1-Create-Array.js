// **************** Creating Arrays ******************

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits); // ["Apple", "Banana", "Mango"]

// Accessing Array Elements

let fruits1 = ["Apple", "Banana", "Mango"];
console.log(fruits1[0]); // Apple
console.log(fruits1[2]); // Mango

// Modifying Array Elements

let fruits2 = ["Apple", "Banana", "Mango"];
fruits2[1] = "Orange";
console.log(fruits2); // ["Apple", "Orange", "Mango"]

// Looping Through Arrays

let fruits3 = ["Apple", "Banana", "Mango"];

// 1. Using for loop
for(let i = 0; i < fruits3.length; i++) {
    console.log(fruits3[i]);
}

// 2. Using for...of loop
for(let fruit of fruits3) {
    console.log(fruit);
}
