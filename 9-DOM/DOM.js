// ************************  DOM **********************

// In JavaScript (inside the browser), the window object is the global object.
// Everything you create globally becomes part of the window.

console.log(document); // whole window object
                       // Used to print values in a readable format.

console.dir(document);  //Used to display an object with all its 
                        //properties in a structured, detailed way.


// Dynamic Changes in JavaScript
// JavaScript can change HTML, CSS, and content dynamically (while the page is running).


// ********************** DOM Manipulation *************************

// JavaScript changes your HTML using DOM.

// 1. Select an Element by id

let heading = document.getElementById("heading");
console.log(heading)

// 2. Select an Element by class

let classes = document.getElementsByClassName("class-heading");
console.log(classes)

// 3. Select an Element by Tag

let tag = document.getElementsByTagName("h1");
console.log(tag)

// 4. Query Selector
// querySelector() is used to select any HTML element

let element = document.querySelectorAll("h1")
console.log(element)

