// 1. Using element.onclick = ... overwrites the previous one handler

let btn = document.querySelector("button")
btn.onclick = () => {
    console.log("button 1 was clicked");
}
let btn1 = document.querySelector("button")
btn1.onclick = () => {
    console.log("button 2 was clicked");
}
//  thats why we prefer addEventListener()


//  ******************* EventListener *******************

// 1. addEventListener

// a. Multiple Actions in a Single Event Listener
// You can write multiple statements inside the function for one event.

let newbtn = document.querySelector("#btn")
newbtn.addEventListener("click",() => {
    console.log("button click");
    newbtn.style.backgroundColor = "pink"
    
})

// b.Multiple Event Listeners on the Same Element

let div1 = document.querySelector("#hi")

// Mouse enters
div1.addEventListener("mouseenter",() => {
    console.log("mouse enters");
    div1.innerHTML = "<h1>hi</h1>"
    
})

// Mouse leaves
div1.addEventListener("mouseleave",() => {
    console.log("mouse out");
    
})

// 2. removeeventlistener

// if we want to remove the event we store a function in a variable so we pass it in remove event to remove it
let btnn = () => {
    console.log("button 1 is clicked")
}
btn.addEventListener("click",btnn)

let btnn2 = () => {
    console.log("button 2 is clicked")
}
btn.addEventListener("click",btnn2)

// remove

btn.removeEventListener("click",btnn2)