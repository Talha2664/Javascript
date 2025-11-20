// 1. for Loop  => You need full control over the loop. where to stop or continue
// Use when you know the number of times you want to run the loop.

for (let i = 1; i <= 5; i++) {
    console.log("Iteration " + i);
}


// Print even numbers from 0 to 100

for(let i = 1; i<=100; i++){
    if(i%2 == 0){
        console.log(i)
    }
}