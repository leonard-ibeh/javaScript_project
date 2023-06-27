let movieNameRef = document.getElementById("movie-name");

let searchBtn = document.getElementById("search-btn");

let result = document.getElementById("result");

// ====Function to Fetch data from API =====

let getMovie = () => {
  let movieName = movieNameRef.value;
  let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
  // if Input field is empty
  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`;
  }

  //   if input is Not empty
  else {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        console.log(data.Poster);
        console.log(data.Title);
        console.log(data.imdbRating);
        console.log(data.imdbRating);
        console.log(data.Rated);
        console.log(data.Year);
        console.log(data.Runtime);
        console.log(data.Genre);
        console.log(data.Plot);
        console.log(data.Actors);

        result.innerHTML = `<div class="info">
        <img src=${data.Poster} class="poster">
        </div>`;
      });
  }
};

//if input
window.addEventListener("load", getMovie);
