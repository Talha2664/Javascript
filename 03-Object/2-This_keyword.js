// ************** In object method *****************
// this => the keyword #this use to refer to the object’s own properties.

let user = {
  name: "Talha",
  greet() {
    console.log(this.name);
  }
};

user.greet();  // this → user


// ***************** In Class ********************
// Class ke andar this keyword object instance ko point karta hai.

class Person {
  constructor(name) {
    this.name = name;
  }
}

let p1 = new Person("Talha");
console.log(p1.name);

