// create function

function data(getdata){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("data",":",getdata);
            resolve("success")
        }, 2000);
    })
}

// create async function
// Makes a function return a promise.

async function getAlldata() {
    console.log("getting data 1....");
    await data(1);  //Waits for the promise to finish before moving to the next line.
    console.log("getting data 2....");
    await data(2);
    console.log("success");
}
// await always runs in async function so we can create a async function and run in it
// Later we can also call them 
// Because of this we have a concept of iife

// ********************** IIFE (Immediately Invoked Function Expression)*******************

//1. IIFE is used ONLY when you want the function to run immediately.
// You do not call it again later.


(async function () {            // Syntax =>  (func)();
    console.log("getting data 1....");
    await data(1);  //Waits for the promise to finish before moving to the next line.
    console.log("getting data 2....");
    await data(2);
    console.log("success");
})();
// Now we dont need to call the function



// 2. using IIFE we can also make the variables private

// Without IIFE
let count = 0;

console.log(count); // anyone can access it


// With IIFE
(function () {
    let count = 0;   // private variable
    console.log("Inside IIFE:", count);
})();

// Try to access count outside:

// console.log(count); //  ERROR! Not accessible
