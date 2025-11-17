// ************************  DOM **********************

// In JavaScript (inside the browser), the window object is the global object.
// Everything you create globally becomes part of the window.

console.log(document); // whole window object
                       // Used to print values in a readable format.

console.dir(document);  //Used to display an object with all its 
                        //properties in a structured, detailed way.


// Dynamic Changes in JavaScript
// JavaScript can change HTML, CSS, and content dynamically (while the page is running).



// ********************** Nodes in DOM *******************

// 1. parentNode => Shows everything (text, spaces, elements).


let element1 = document.getElementById("box1")
console.log(element1.parentNode)

// 2. parentElement => Same as parentNode but returns only element (not document).

let element2 = document.getElementById("box1")
console.log(element2.parentElement)

// 3. childNodes  =>  Shows everything (text, spaces, elements).

let element3 = document.getElementById("container")
console.log(element3.childNodes)

// 4. children =>    Only elements (no text nodes).

let element4 = document.getElementById("container")
console.log(element4.children)

// 5. firstChild---lastChild---nextSibling---previousSibling
// Might return text node (space, line break).

let element5 = document.getElementById("container")
console.log(element5.firstChild)

// 6. firstElementChild---lastElementChild---nextElementSibling---previousElementSibling
// Only real element.

let element6 = document.getElementById("container")
console.log(element6.firstElementChild)



// ******************* DOM Manipulation Properties ****************

// 1. Tag Name  => Return tagName for element nodes

let element7 = document.getElementById("container")
console.log(element7.tagName)

// 2. innerHTML  =>  Gets or sets HTML + text inside an element

// get
let element8 = document.getElementById("box1")
console.log(element8.innerHTML)
// set
let element9 = document.getElementById("box1")
element9.innerHTML = "<h2>hello world </>"
console.log(element9.innerHTML)

// 3. innerText
// Returns only visible text

// get
let element10 = document.getElementById("box1")
console.log(element10.innerText)
// set
let element11 = document.getElementById("box2")
element11.innerText = "hi talha"
console.log(element11.innerText)


// 4. TextContent
// ✔ Returns ALL text (including hidden text)

let element12 = document.getElementById("box3")
console.log(element12.textContent) // if i write innerText my content not shows 
                                   // becuase i hide the content using CSS 




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

// *************** Attribute ***********
// 1. getAttribute()
// Gets/reads the value of an attribute.

// get
let Img = document.getElementById("img1")
console.log(Img.getAttribute("src"))
// set
let Img1 = document.getElementById("img1")
console.log(Img1.setAttribute("src","https://www.google.com/"))

// Till now we learn how we change something in existing elements
// Now we learn how we create new element in javascript

// ******************* Create or Insert Element ***************

// Create Element

let newbtn = document.createElement("button")
console.log(newbtn)
newbtn.innerText = "click me!"

// Now append Element =>  node.append(el) Adds element at the start of parent
// first select element from document where we want to show on document

let div = document.getElementById("container")
div.append(newbtn)

// like append we also do 
// prepend => Adds element at the start of parent.
// before =>  Adds element at the before of parent.
// after  =>  Adds element at the after of parent.


// Delete Element

let divs = document.getElementById("box4")
divs.remove()


