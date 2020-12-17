var url = "https://api.funtranslations.com/translate/minion.json";

let translateBtn = document.getElementById("translate-btn")
let translatedTextarea = document.getElementById("translated-output");

function getTranslationURL(text)
{
    return url + "?" + "text=" + text;
}

function errorHandler(error)
{
    console.log(error);
    alert("Error Occured.");
}

async function clickHandler()
{
    const userInput = document.getElementById("user-input").value;
    
    fetch(getTranslationURL(userInput))
    .then(response => response.json)
    .then(json => {
        translatedTextarea.value = object.contents.translated;
    }).catch(errorHandler);

}

translateBtn.addEventListener("click", clickHandler);


