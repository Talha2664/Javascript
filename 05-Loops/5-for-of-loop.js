// 4. for...in Loop                 // used in object and array

let student = {name: "Talha", age: 23, cgpa: 8.0};

for (let key in student) {
    console.log(key + ": " + student[key]);
}