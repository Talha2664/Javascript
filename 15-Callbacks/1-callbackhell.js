// ******************* Call back function ********************

function calculator(a,b,operation){
    return operation(a,b)
}

function sum(a,b){
    return a + b
}

console.log(calculator(1,2,sum));


// ******************************* Callback Hell ********************

// When you use many callbacks inside callbacks, the code becomes nested, hard to read, and messy.
// It usually happens with asynchronous tasks.

// Example no 1

function getdata(dataId,getNextData){
     setTimeout(() => {
        console.log(`data: ${dataId}`)
        if(getNextData){
            getNextData()
        }
     }, 2000);
}
console.log("getting data 1....");
getdata(1,() => {
    console.log("getting data 2....");
    getdata(2,() => {
        console.log("getting data 3....");
        getdata(3)
    }) 
})

// It keeps going RIGHT → → → like a pyramid shape, which is hard to read and understand.
// This shape is called:
// Pyramid of Doom
// Callback Hell

// Example no 2

function doTask(taskName, nextTask) {
    setTimeout(() => {
        console.log(`Task completed: ${taskName}`);

        if (nextTask) {
            nextTask();   // move to next task
        }

    }, 2000);
}

console.log("Starting tasks...");

doTask("Washing clothes", () => {
    doTask("Drying clothes", () => {
        doTask("Ironing clothes", () => {
            console.log("All tasks done!");
        });
    });
});

// There is a concept of promises to solve the problem of callback hell