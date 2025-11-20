
// callback function

function func(num1,num2,operation){
    console.log(operation(num1,num2))
}
let subtraction = (a,b) =>{
    return a-b
}
func(1,2,subtraction)

// ******************* Array Methods using callback function *************

// for each loop in array
// it does only prints values or do some operation it does not return a new array 

let countries = ["USA", "UK", "India"];
countries.forEach((country) =>{
    console.log(country.toUpperCase())
});

// map method
// Creates a new array with the returned values

let arr = [2,4,6,8]
let square = (val) => {
    return val*val;
}
let result = arr.map(square)
console.log(result);   // create new array
console.log(arr);         // old array remains same

// Filter method

let arry = [1,2,3,4,5,6]
// make function ,we make it also inside the filter method 
let findval = (val) => {
    return val >= 4
}
// apply in filter method as arrow function
let res = arry.filter(findval)
console.log(res);
console.log(arry);
// It also make new array

// Reduce Method
// It provides single value 

let marks = [20,40,50,60]
// make function with two parameters
let calcAvg = (prevVal,currVal) => {
    avg = (prevVal + currVal)/4;
    return avg
}
// apply in reduce method as arrow function
let printval = marks.reduce(calcAvg)
console.log(printval);
console.log(marks);
// it also make new array
 

