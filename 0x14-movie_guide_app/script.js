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
        // if movie exist in database
        if (data.Response == "True") {
          result.innerHTML = `
          <div class="info">
            <img src=${data.Poster} class="poster">
             <div>
             <h2>${data.Title}</h2>
             <div class="rating">
              <span class="star">
                <ion-icon  name="star-sharp"></ion-icon>
              </span> 
             <h4>${data.imdbRating}</h4>
             </div>
             <div class="details">
             <span>${data.Rated}</span>
             <span>${data.Year}</span>
             <span>${data.Runtime}</span>
             </div>
             <div class="genre">
                <div>${data.Genre.split(",").join("</div><div>")}</div>
             </div>
             </div>
           </div>
           <h3>Plot:</h3>
           <p>${data.Plot}</p>
           <h3>Cast:</h3>
           <p>${data.Actors}</p>
           `;
        }

        // if movie does Not exit in database
        else {
          result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
        }
      })
      // if erroe occurs
      .catch(() => {
        result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
      });
  }
};
searchBtn.addEventListener("click", getMovie);
//if input
window.addEventListener("load", getMovie);
