// Looping Array through For Loop

let arr = [1,2,3,4,5];
for(let i = 0; i<arr.length;i++){
    console.log(arr[i])
}

// Looping Array through For-of Loop

let arr1 = [1,2,3,4,5];
for(let num of arr1){
    console.log(num)
}

// Find the average marks of student 

let marks = [85,97,44,37,76,60];
let sum = 0
for(let i = 0; i<marks.length; i++){
    sum += marks[i]
}
Average = sum/marks.length
console.log(Average)