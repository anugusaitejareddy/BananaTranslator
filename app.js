var url = "https://api.funtranslations.com/translate/minion.json";

let translateBtn = document.getElementById("translate-btn")
let translatedTextarea = document.getElementById("translated-output");

function getTranslationURL(text)
{
    return url + "?" + "text=" + text;
}

async function clickHandler()
{
    const userInput = document.getElementById("user-input").value;
    
    fetch(getTranslationURL(userInput))
    .then(response => response.json())
    .then(returnedObject => {
        console.log(returnedObject);
        translatedTextarea.value = returnedObject.contents.translated;
    }) 
}

translateBtn.addEventListener("click", clickHandler);


