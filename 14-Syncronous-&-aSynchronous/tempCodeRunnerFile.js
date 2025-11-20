console.log("Step 1");

let stepRun = () => {
    console.log("Step 2 (after 2 seconds)"); 
}
setTimeout(stepRun,2000); // 2s => 2000 milli-second

console.log("Step 3");