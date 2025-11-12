// Creating an Object

let student = {
    name : "Talha",
    age : 23,
    cgpa : 8.0,
    show : function() {
        console.log(`${this.name} age is ${this.age} `);  //the keyword #this use to refer to the object’s own properties.
    }
};
// print object properties
student.show()  

// Adding, Changing, and Deleting Properties

let user = { name: "Talha" };

// Add new property
user.age = 21;

// Change value
user.name = "Talha Mughal";

// Delete property
delete user.age;
