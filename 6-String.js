// String

let name1 = "Talha";      // Double quotes
let name2 = 'Mughal';     // Single quotes
let name3 = `Hello ${name1}`; // Backticks (Template Literal)

console.log(name1); // Talha
console.log(name2); // Mughal
console.log(name3); // Hello Talha

// ****************** String Methods ****************

// 1. String Length

let name = "Talha";
console.log(name.length);

// 2. toUpperCase() & toLowerCase()

let word = "JavaScript";

console.log(word.toUpperCase()); // Output: JAVASCRIPT
console.log(word.toLowerCase()); // Output: javascript

// 3. charAt(index)

let text = "Talha";
console.log(text.charAt(2)); // Output: l

// 4. indexOf() & lastIndexOf()

let text1 = "banana";

console.log(text1.indexOf('a'));      // Output: 1 (first 'a')
console.log(text1.lastIndexOf('a'));  // Output: 5 (last 'a')

// 5. slice(start, end)
// Extracts a part of a string.

let text2 = "JavaScript";
console.log(text2.slice(0,4));  // Output: Java
console.log(text2.slice(4));    // Output: Script (from 4 to end)

// 6. substring(start, end)
// Also extracts part of a string (similar to slice but doesn’t support negative indexes).

let text3 = "JavaScript";
console.log(text3.substring(0,4)); // Output: Java

// 7. replace(old, new)

let text4 = "Hello World";
console.log(text4.replace("World", "Talha")); // Output: Hello Talha

// 8. trim()
// Removes white-spaces from both ends of a string.

let text5 = "   Hello JavaScript   ";
console.log(text5.trim()); // Output: "Hello JavaScript"

// 9. split(separator)
// Converts a string into an array.

let fruits = "apple,banana,grape";
let arr = fruits.split(",");
console.log(arr); // Output: ["apple", "banana", "grape"]

// 10. Template Literals

let Name = "Talha";
let age = 21;

let sentence = `My name is ${Name} and I am ${age} years old.`;
console.log(sentence);
// Output: My name is Talha and I am 21 years old.


let arr1 = [1,2,3,4];
arr1[0] = 0;
console.log(arr1)