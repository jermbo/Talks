const BASE_URL = "https://api.sampleapis.com/movies";

// ---------------------------------
// CREATE
const createForm = document.querySelector(".create-form");
const createButton = createForm.querySelector("button");

createForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const elements = e.target.elements;
  const movieObject = {
    title: elements[0].value,
    posterURL: elements[1].value,
    imdbId: elements[2].value
  };
  console.table(movieObject);
  createMovie(movieObject);
});

async function createMovie(movie) {
  createButton.disabled = true;

  const resp = await fetch(`${BASE_URL}/action-adventure`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(movie)
  });

  const data = await resp.json();
  console.table(data);
  createButton.disabled = false;
}
