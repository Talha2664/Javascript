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