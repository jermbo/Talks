const BASE_URL = "https://api.sampleapis.com/movies/";

// ---------------------------------
// CREATE
const createForm = document.querySelector(".create-form");
const createButton = createForm.querySelector("button");

createForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
