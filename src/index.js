let poemFormElement = document.querySelector("#poem-generator-form")
poemFormElement.addEventListener("submit", generatePoem);

function generatePoem(event) {
    event.preventDefault();
   
    new Typewriter("#poem", {
        strings: "Generating roses and violets...",
        autoStart: true,
        delay: 50,
        cursor: "",
      });
}

