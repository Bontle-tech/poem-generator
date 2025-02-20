function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "4a3ob4aa80151eaf07bb532fe635b4t2";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a Poem expert and you love to create poems that evoke emotions. Your mission is to follow the users instructions and separate each line with a <br />.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
