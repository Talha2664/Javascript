// Create a new button give them name click me,background color red and text color white

let newbtn = document.createElement("button");
newbtn.innerText = "click me!";
newbtn.style.backgroundColor = "red";
newbtn.style.color = "white";

// Now add it as first element of body 

let Body = document.querySelector("body")
Body.prepend(newbtn)




