let poemFormElement = document.querySelector("#poem-generator-form")
poemFormElement.addEventListener("submit", generatePoem);


function generatePoem(event) {
    event.preventDefault();
    
    let instructionsInput = document.querySelector ("#user-instructions")
    let context = "Generate a 4 line poem and separate each line with <br>"
    let prompt = `Generate a short poem about ${instructionsInput.value}`
    let apikey = "4d32ebdo522bet9b3a02cc31eef7c6bf"
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`
    
    let poemElement = document.querySelector("#poem")
    poemElement.classList.remove ("hidden")
    poemElement.innerHTML = `Fetching ${instructionsInput.value}... Hiding roses... Removing violets... `
   
    axios.get(apiUrl).then(displayPoem)
    
}

function displayPoem (response) {
    
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 20,
        cursor: "",
      });
}

