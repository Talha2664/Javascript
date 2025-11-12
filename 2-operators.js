// 1. Arithmetic Operators

let a = 10;
let b = 3;

console.log(a + b);  // 13   (Addition)
console.log(a - b);  // 7    (Subtraction)
console.log(a * b);  // 30   (Multiplication)
console.log(a / b);  // 3.3333... (Division)
console.log(a % b);  // 1    (Remainder)
console.log(a ** b); // 1000 (Exponent: 10^3)

// Pre-Increment 
let a1 = 5;
console.log(++a1);  // 6
console.log(a1);    // 6

// Pre-Decrement
let b1 = 5;
console.log(--b1);  // 4
console.log(b1);    // 4

a++;  // Post Increment by 1
console.log(a); // 11

b--;  // Post Decrement by 1
console.log(b); // 2


// 2. Assignment Operators


let x = 5;      // simple assignment

x += 3;         // x = x + 3
console.log(x); // 8

x -= 2;         // x = x - 2
console.log(x); // 6

x *= 2;         // x = x * 2
console.log(x); // 12

x /= 4;         // x = x / 4
console.log(x); // 3

x %= 2;         // x = x % 2
console.log(x); // 1


// 3. Comparison Operators

let num = 10;
let str = "10";

console.log(num == str);   // true (values equal)
console.log(num === str);  // false (value + type not equal)
console.log(num != 5);     // true
console.log(num !== "10"); // true
console.log(num > 5);      // true
console.log(num < 20);     // true
console.log(num >= 10);    // true
console.log(num <= 8);     // false

// 4. Logical Operators

let age = 20;
let hasID = true;

console.log(age >= 18 && hasID); // true (AND)
console.log(age < 18 || hasID);  // true (OR)
console.log(!hasID);             // false (NOT)

// 5. String Operators

let firstName = "Talha";
let lastName = "Mughal";

let fullName = firstName + " " + lastName; // Concatenate
console.log(fullName); // Talha Mughal