function vowel(str){
    let arr = str.split("");
    let vowelsFound = [];

    for(let i = 0; i < arr.length; i++){
        if (
            arr[i] == "a" || 
            arr[i] == "e" || 
            arr[i] == "i" || 
            arr[i] == "o" || 
            arr[i] == "u"
        ){
            vowelsFound.push(arr[i]); 
        }
    }
    return vowelsFound;
}

let res = vowel("hello");
console.log(res); // ["e", "o"]



// for the given array print square of each val using arrayeach

let arr = [2,4,6,8]

let square = (val) => {
    console.log(val*val);
}

arr.forEach(square);
