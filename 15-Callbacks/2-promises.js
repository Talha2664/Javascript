// ************************ Promises **********************

// IN general programming we are not creating the Promises javascript fetch() return promises

function data(getdata){
    return new Promise((resolve,reject) =>{
    setTimeout(() => {
        console.log("hello" +" "+ getdata);
        
        resolve("work done")
    }, 2000);
    
}) 
}
let promise = data("talha")
console.log(promise);
