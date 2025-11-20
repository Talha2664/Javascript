
// callback function

function func(num1,num2,operation){
    console.log(operation(num1,num2))
}
let subtraction = (a,b) =>{
    return a-b
}
func(1,2,subtraction)


// for each loop in array

let countries = ["USA", "UK", "India"];
countries.forEach((country) =>{
    console.log(country.toUpperCase())
});
// foreach is used when we do some operation on values like toUpperCase