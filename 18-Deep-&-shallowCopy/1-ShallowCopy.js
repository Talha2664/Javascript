// create object

let student ={
    name : "talha",
    age : 23,
    marks : [20,50],
    department : {section : "BSCS"}
}
//{...student} => Create a new object, and copy all key-value pairs from original into it.
// If student object contains nested objects/arrays, those are not copied, only referenced.

let studentCopy = {...student};  // {...student} => we can copy using spread operator
console.log(studentCopy);
studentCopy.age = 25;  // change age in studentCopy object 
console.log(studentCopy.age);  // age is changed in studentCopy
console.log(student.age)     // but not changed in original one

// but if we make a copy and make changes in the nested object , the changes are made

let student1 = {...student};
student1.marks[0] = 45;
console.log(student1.marks[0]);  
console.log(student.marks[0]);
//Now changes made in Both Shallow copy and original



