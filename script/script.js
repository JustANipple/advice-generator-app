const id = document.querySelector(".advice_id");
const par = document.querySelector(".advice_text");
const btn = document.querySelector(".advice_randomizer");
const dice = document.querySelector(".advice_randomizer img");

btn.addEventListener("click", getAdvice);

btn.addEventListener("mouseover", (event) => {
    dice.style.transform = "rotate(135deg) scale(1.25)";
});

btn.addEventListener("mouseout", (event) => {
    dice.style.transform = "rotate(0deg) scale(1)";
});

async function getAdvice() {
    //save url in a variable
    const url = "https://api.adviceslip.com/advice";
    //store the request giving the url
    const request = new Request(url);
    //store the response of the fetch
    const response = await fetch(request);
    //transform the response into a json
    const advice = await response.json();
    
    id.textContent = "#" + advice.slip.id;
    par.textContent = "\"" + advice.slip.advice + "\"";
}