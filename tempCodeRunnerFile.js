function func(num1,num2,operation){
    console.log(operation(num1,num2))
}
let subtraction = (a,b) =>{
    return a-b
}
func(1,2,subtraction)