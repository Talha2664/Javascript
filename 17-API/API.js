// In JSON() method we give input in json and they give output which is JS Object

// using async&wait 

let URL = "https://api.thecatapi.com/v1/images/0XYvRd7oD";
let para = document.querySelector("p")

/*
async function fetchApi(){
    console.log("getting data...");
    let response = await fetch(URL)
    console.log(response); // the data coming from API is in raw JSON text, not directly readable.
    let finalResponse = await response.json() // now using json() it becomes a JavaScript object
    para.innerText = finalResponse.breeds[0].description;   // which is in redable format
} 
 */

// using promise chaining

function getdata(){
    fetch(URL)
      .then((response) => {
        return response.json()
      })
      .then((data)=> {
        console.log(data.breeds[0].description);
      })
}

getdata()