// ******************* Spread Operator ******************
// simply => Open array or object and combine it

// used for Arrays & Objects
// Spread “opens” the object and copies all key-value pairs.

// Spread with Arrays

let arr1 = [1, 2, 3];
let arr2 = [4, 5];

let result = [...arr1, ...arr2];  // add two arrays into single one
console.log(result);

// Output:
[1, 2, 3, 4, 5]
