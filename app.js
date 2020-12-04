var url = "	https://api.funtranslations.com/translate/yoda.json";

let translateBtn = document.getElementById("translate-btn")
let translatedTextarea = document.getElementById("translated-output");

translateBtn.addEventListener("click", trasnlateBtnClick);

function trasnlateBtnClick()
{
    let userInput = document.getElementById("user-input").value;
    // translatedTextarea.value = 
    translateText(userInput);
}


async function translateText(userInput)
{
    url = url + "?text="+userInput; 
    const response = await fetch(url);
    const object = await response.json();
    console.log (object);
}
