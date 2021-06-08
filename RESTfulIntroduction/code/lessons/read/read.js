const BASE_URL = "https://api.sampleapis.com/movies/";

// ---------------------------------
// READ
const categoryButtons = document.querySelectorAll(".api-endpoints .btn");
const categoryDisplay = document.querySelector(".category-display");

categoryButtons.forEach((btn) => btn.addEventListener("click", handleClick));

function handleClick(e) {
  e.preventDefault();
}
