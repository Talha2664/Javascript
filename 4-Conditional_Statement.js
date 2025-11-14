

// 2. if...else Statement
// Executes one block if true, another if false.

let age1 = 16;

if (age1 >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// 3. if...else if...else Statement
// Checks multiple conditions in order.

let marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}


// 4. Ternary Operator (Short if-else)

let age3 = 19;
              //condition ? value_if_true : value_if_false;
let status = (age3 >= 18) ? "Adult" : "Minor";  

console.log(status);


// 5. switch Statement
// Used when you have many specific cases to check.

let day = 3;

switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Another day");
}