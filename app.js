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
    const response = await fetch(getTranslationURL(userInput));
    const object = await response.json();
    console.log(object);
    translatedTextarea.value =  object.contents.translated;
}

translateBtn.addEventListener("click", clickHandler);


