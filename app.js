var txtinput = document.querySelector("#text-input");
var btntranslate = document.querySelector(".btn-translate");
var txtoutput =document.querySelector("#text-output");

var url="https://api.funtranslations.com/translate/ebonics.json";

//convert code into ES6
const constructUrl = (text) =>
{
    return url + "?" + "text=" + text;
}

const errorHandler = (error) => {
    console.log("error occured",error);
    alert("something wrong with server! try again after some time");
}

btntranslate.addEventListener("click",() =>{

    var inputText = txtinput.value;
    console.log("heyyyyy")
    fetch(constructUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText=json.contents.translated;
        txtoutput.innerText = translatedText;
    })
    .catch(errorHandler)
});

