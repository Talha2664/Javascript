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
// now call async function

getAlldata()
