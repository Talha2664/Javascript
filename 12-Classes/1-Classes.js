// A class in JavaScript is a blueprint for creating objects.

// Create a Class
class toyotacar {
    start(){
        console.log("car started");
        
    }
    stop(){
        console.log("car stoped");
        
    }
}
// In this class i can not create the constructor so the javascript automatically constructor it
// Now Make a Object

let obj = new toyotacar();
// Now this object has all properties and methods of toyotaclass

// Make another class

class car {
    constructor(name,year){     //Constructor is automaticallty invoked when object is created
        this.carname = name;
        this.caryear = year
    }
    show(){
        console.log(`The car name is ${this.carname} and the year of registration is ${this.caryear}`)
    }
}

let fortuner = new car("fortuner",2025);
fortuner.show()

 