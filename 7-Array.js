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


// ****************** Array Methods ***************

// 1. push()
// Adds one or more elements to the end of the array.

let vegetables = ["Carrot", "Potato"];
vegetables.push("Tomato");
console.log(vegetables); // ["Carrot", "Potato", "Tomato"]

// 2. pop()
// Removes the last element from the array.

let animals = ["Cat", "Dog", "Rabbit"];
let removedAnimal = animals.pop();
console.log(animals); // ["Cat", "Dog"]
console.log(removedAnimal); // "Rabbit"

// 3. shift()
// Removes the first element from the array.

let colors = ["Red", "Green", "Blue"];
let firstColor = colors.shift();
console.log(colors); // ["Green", "Blue"]
console.log(firstColor); // "Red"

// 4. unshift()
// Adds one or more elements to the beginning of the array.

let cities = ["Paris", "London"];
cities.unshift("New York","USA");
console.log(cities); // ["New York", "Paris", "London"]

// 5. slice()
// Returns copy of a portion of the array. Original array not changed.

let books = ["Book1", "Book2", "Book3", "Book4"];
let selectedBooks = books.slice(1, 3); // index 1 to 2
console.log(selectedBooks); // ["Book2", "Book3"]
console.log(books);         // ["Book1", "Book2", "Book3", "Book4"]

// 6. splice()
// Can add, remove, or replace elements at a specific index.

let drinks = ["Water", "Juice", "Soda"];
drinks.splice(1, 1, "Tea"); // replace index 1
console.log(drinks); // ["Water", "Tea", "Soda"]

drinks.splice(2, 1); // remove index 2
console.log(drinks); // ["Water", "Tea"]

// 7. reverse()
// This method change the original array

let numbersArray = [1, 2, 3, 4, 5];
numbersArray.reverse();
console.log(numbersArray); // [5, 4, 3, 2, 1]

