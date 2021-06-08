const BASE_URL = "https://api.sampleapis.com/movies";

// ---------------------------------
// DELETE
const deleteForm = document.querySelector(".delete-form");
const deleteButton = deleteForm.querySelector("button");

deleteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const elements = e.target.elements;
  const movieObject = {
    id: elements[0].value
  };
  deleteMovie(movieObject);
});

async function deleteMovie(movie) {
  deleteButton.disabled = true;

  const resp = await fetch(`${BASE_URL}/action-adventure/${movie.id}`, {
    method: "DELETE"
  });

  const data = await resp.json();
  console.table(data);
  deleteButton.disabled = false;
}
