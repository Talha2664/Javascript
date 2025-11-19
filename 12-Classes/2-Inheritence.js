// 1. Single Inheritance

// Parent class
class Vehicle {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    info() {
        console.log(`Brand: ${this.brand}, Year: ${this.year}`);
    }
}

// Child class
class Car extends Vehicle {
    constructor(brand, year, model) {
        super(brand, year); // Call parent constructor using super because the variable define in parent
        this.model = model; // Child’s own property
    }

    showModel() {
        super.info()    // use parent method using super keyword
        console.log(`Model: ${this.model}`);
    }
}

let myCar = new Car("Toyota", 2025, "Fortuner");

myCar.showModel(); // Model: Fortuner             (own method)


// 2. Multilevel Inheritance
// A chain of classes where a class inherits from another

class Vehicle {
    start() {
        console.log("Vehicle started");
    }
}

class Car extends Vehicle {
    drive() {
        console.log("Car is driving");
    }
}

class ElectricCar extends Car {
    charge() {
        console.log("Electric car is charging");
    }
}

let tesla = new ElectricCar();
tesla.start();  // Vehicle started
tesla.drive();  // Car is driving
tesla.charge(); // Electric car is charging



// 3. Hierarchical Inheritance
// Multiple child classes inherit from the same parent class.

class Vehicle {
    start() {
        console.log("Vehicle started");
    }
}

class Car extends Vehicle {
    drive() {
        console.log("Car is driving");
    }
}

class Bike extends Vehicle {
    ride() {
        console.log("Bike is riding");
    }
}

let mycar = new Car();
let myBike = new Bike();

mycar.start(); // Vehicle started
myBike.start(); // Vehicle started