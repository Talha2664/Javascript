// Constructor function me this naya object banata hai.

// Function itself constructor nahi hota.
// It becomes a constructor only when called with new keyword.


// create function

function Person(name, age) {
    this.name = name;
    this.age = age;
}
// this is a simple function

// Create Objects using Constructor

let p1 = new Person("Talha", 21); //new Person() yeh function ko constructor mode me chala deta hai.
let p2 = new Person("Ali", 20);

console.log(p1.name); // Talha
console.log(p2.name); // Ali