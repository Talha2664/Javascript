// In prototype there are some general methods and properties
// So when the objects created they are inherited by them

// ************************ Prototype in JS *********************

let array = [1,2,3,4]
console.log(array);
// JS objects have special property called prototype
//array is a object so when we print it we see the prototype in it which have properties & methods

// We can also make our own prototype

const employee = {
    taxrate : () => {
        console.log("tax rate is 10%");
        
    }
}

const talha = {
    name : "talha",
    taxrate : () => {
        console.log("tax rate is 20%");// we can inherit property of employee in talha 
                                    // by making prototype using __proto__
    }
}
// if both object and prototype has same attribute and method then the object own method runs

// We can also make our own prototype
// we can set prototype using __proto__

talha.__proto__ = employee;
