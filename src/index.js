function displayPoem(response) {
  console.log(response);
  new Typewriter(".poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let poemSubject = document.querySelector(".subject-input");
  let apiKey = "b6d6abf04ta9967430a746of97dac003";
  let prompt = `User Instructions: Generate a rhyming short poem of  ${poemSubject.value} `;
  let context = `You are an expert short poem writer. Your mission is to generate a 4 line short poem in html format. Separate each line and do not include the title of the poem other than the poem. Make sure to follow user instructions.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
