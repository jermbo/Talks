const BASE_URL = "https://api.sampleapis.com/movies/";

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

// ---------------------------------
// UPDATE
const updateForm = document.querySelector(".update-form");
const updateButton = updateForm.querySelector("button");

updateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const elements = e.target.elements;
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
  console.table(movieObject);
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
