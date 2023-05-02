const id = document.querySelector(".advice_id");
const par = document.querySelector(".advice_text");
const btn = document.querySelector(".advice_randomizer");

btn.addEventListener("click", getAdvice);

async function getAdvice() {
    //save url
    const url = "https://api.adviceslip.com/advice";
    //make a request and store it
    const request = new Request(url);
    //store the response into a variable
    const response = await fetch(request);
    if(response.ok) {
        console.log("link is working");
    } else {
        console.log("link is not working");
    }
    //get the json from the response
    const advice = await response.json();
    
    id.textContent = "#" + advice.slip.id;
    par.textContent = "\"" + advice.slip.advice + "\"";
}