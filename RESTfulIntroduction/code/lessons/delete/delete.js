const BASE_URL = "https://api.sampleapis.com/movies";

// ---------------------------------
// DELETE
const deleteForm = document.querySelector(".delete-form");
const deleteButton = deleteForm.querySelector("button");

deleteForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
