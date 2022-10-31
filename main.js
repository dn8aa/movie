const container = document.querySelector(".container");
let API = "https://www.omdbapi.com/?apikey=b6003d8a&s=All";
fetch(API)
  .then((res) => res.json())
  .then((info) => {
    info.Search.forEach((movie) => {
      container.innerHTML += `<div class="card">
      <img src="${movie.Poster}"
          alt="">
      <h1>${movie.Title}</h1>
      <p>Year: ${movie.Year}</p>
  </div>`;
    });
  });

