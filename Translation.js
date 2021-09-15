// Connect with Html elements using query selector
var btnInput = document.querySelector("#btn-input");
var textArea = document.querySelector("#text-area");
var textOutput = document.querySelector("#output");

// var inputText = textArea.Value;  // input
// console.log (inputText)
var url = "https://api.funtranslations.com/translate/shakespeare.json";
// var text;

btnInput.addEventListener("click", clickfunction)

//function to perfom processing on click button
function clickfunction(){
    console.log("clicked");
    console.log(textArea.value);

    doFetch(textArea.value);
    }
//function to create URL
function CreateURL(text){
    console.log(url + "?text="+ text);
    return url + "?text="+ text;
}

function doFetch(text){
    fetch(CreateURL(text))
    .then (response => response.json())
    .then (json => {
        console.log(json.contents.translated);
        var output = json.contents.translated
        textOutput.innerText = output; //Show he output
    })
}

//Another way that is more clearly defined

// function doFetch(text){
//     fetch(CreateURL(text))
//     .then(function responseHandler(response){
//         return response.json
//     }).then (function JsonHandlre(json){
//         console.log(json);
//         var output = json.contents.translated
//         textOutput.innertext = output;
//     })
// }