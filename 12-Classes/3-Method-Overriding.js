// Method overriding is when a child class writes same  method already defined in the parent class.
// so then the child class method runs that is overriding of method

class Vehicle {
    start() {
        console.log("Vehicle started");
    }
}

class Car extends Vehicle {
    start() {
        console.log("Car is satarted");
    }
}

let obj = new Car();
obj.start()   // here the child class method
