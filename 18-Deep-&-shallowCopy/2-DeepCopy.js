// create object

let student ={
    name : "talha",
    age : 23,
    marks : [20,50],
    department : {section : "BSCS"}
}
//structuredClone(student) => Create a new object, and copy all key-value pairs from original into it.
// IN deepCopy both Original and Copy objects have different references in memory 

let studentCopy = structuredClone(student);  // Arrays,Objects,Nested objects ka new copy
console.log(studentCopy);
studentCopy.age = 25;  // change age in studentCopy object 
student.age = 24;      // change age in studentCopy object
console.log(studentCopy.age);  
console.log(student.age)     

// Both original and Copy have stored different values 




