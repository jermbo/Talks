const BASE_URL = "https://api.sampleapis.com/movies";

// ---------------------------------
// READ
const categoryButtons = document.querySelectorAll(".api-endpoints .btn");
const categoryDisplay = document.querySelector(".category-display");

categoryButtons.forEach((btn) => btn.addEventListener("click", handleClick));

function handleClick(e) {
  e.preventDefault();

  const movieCategory = e.target.dataset.category;
  getMovieCategory(movieCategory);
}

async function getMovieCategory(category) {
  const resp = await fetch(`${BASE_URL}/${category}`);
  const data = await resp.json();

  categoryDisplay.querySelector("p span").innerText = category;
  categoryDisplay.querySelector("pre").innerHTML = JSON.stringify(
    data,
    null,
    2
  );
}
