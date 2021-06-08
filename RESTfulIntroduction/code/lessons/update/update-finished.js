const BASE_URL = "https://api.sampleapis.com/movies";

// ---------------------------------
// UPDATE
const updateForm = document.querySelector(".update-form");
const updateButton = updateForm.querySelector("button");

updateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const elements = e.target.elements;
  console.dir(elements);
  const movieObject = {
    id: elements[0].value
  };

  if (elements[1].value) {
    movieObject.title = elements[1].value;
  }

  if (elements[2].value) {
    movieObject.posterURL = elements[2].value;
  }

  if (elements[3].value) {
    movieObject.imdbId = elements[3].value;
  }
  console.table(movieObject);
  updateMovie(movieObject);
});

async function updateMovie(movie) {
  updateButton.disabled = true;

  const resp = await fetch(`${BASE_URL}/action-adventure/${movie.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(movie)
  });

  const data = await resp.json();
  console.table(data);
  updateButton.disabled = false;
}
