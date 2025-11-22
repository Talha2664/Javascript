// *********************************** Promises ************************************

// IN general programming we are not creating the Promises 
// when we call the API to send data they return the data in the form of promises

// create Promise
function data(getdata,getNextdata){
    return new Promise((resolve,reject) =>{
    setTimeout(() => {
        console.log("hello" +" "+ getdata);
        if (getdata) {
        resolve("Task completed!");} 
        else {
        reject("Task failed!");}
        if(getNextdata){
            getNextdata()
        }
    }, 2000);
    
}) 
}
// After API return the promise we check that the promise is fullfilled or rejected

let promise = data("talha")
promise
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));
console.log(promise);




// create Promise
function getdata(name){
    return new Promise((resolve) =>{
        setTimeout(() => {
            console.log(name);
            resolve("success")        
                                    //   in this we dont need the next() to call manual
        }, 2000);
    })
}

// Promise chain

console.log("fetching data 1...");
getdata("Muhammad")
    .then(() => {
        console.log("fetching data 2...");
        return getdata("Talha")   //“Wait for this returned promise to finish,                             // and after that, run the next .then().”
    .then(() => {
        console.log("fetching data 3...");
        return getdata("Mughal")
    }).then((res) =>{
        console.log("success");
        
    })
})    //Promise chain is also difficult to understand 
     // so we have another concept to solve this problem using async&wait

// .then() EXPECTS you to return something
// Either:
// a value
// or a promise
// When you return a promise, JavaScript waits.
// If you don’t return the promise → JavaScript does not wait.