function vowel(str){
    let arr = str.split("");
    for(let i = 0; i<arr.length; i++){
        if (arr[i] == a || arr[i] == e || arr[i] == i || arr[i] == o || arr[i] == u ){
            console.log(arr[i])
        }
    }
    return str
}
let res = vowel("hello")
console.log(res)