// function to access input form value and insert that value into the div as a paragraph; clears input form at end
function newParagraph() {
  let inputText = document.getElementById("p-input").value;
  const insertParagraph = document.createElement("p");
  insertParagraph.innerText = inputText;
  document.body.appendChild(insertParagraph);
  document.getElementById("p-input").value = "";
}

// variable to access button; method to tell button on cilck to run above function
let inputButton = document.getElementById("p-button");
inputButton.addEventListener("click", newParagraph);
