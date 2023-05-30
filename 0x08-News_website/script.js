"use scrict";

// Variables

const generalBtn = document.getElementById("general");
const businessBtn = document.getElementById("business");
const sportBtn = document.getElementById("sports");
const entertainmentBtn = document.getElementById("entertainment");
const technologyBtn = document.getElementById("technology");
const searchBtn = document.getElementById("searchBtn");

const newsDetails = document.getElementById("newsdetails");
const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");

//  Array

let newsDataArr = [];

// apis

const API_KEY = "895eaaeebaec42ca88ded5d2856a5c9a";
const HEADLINES_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&apikey=895eaaeebaec42ca88ded5d2856a5c9a";
const GENERAL_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=general&apikey=895eaaeebaec42ca88ded5d2856a5c9a";
const BUSINESS_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=business&apikey=895eaaeebaec42ca88ded5d2856a5c9a";
const SPORT_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=sport&apikey=895eaaeebaec42ca88ded5d2856a5c9a";
const ENTERTAINMENT_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apikey=895eaaeebaec42ca88ded5d2856a5c9a";
const TECHNOLOGY_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=technology&apikey=895eaaeebaec42ca88ded5d2856a5c9a";
const SEARCH_NEWS =
  "https://newsapi.org/v2/everything?q=keyword&apiKey=895eaaeebaec42ca88ded5d2856a5c9a";

// window.onload(function)

generalBtn.addEventListener("click", function () {
  fetchGeneralNews();
});
businessBtn.addEventListener("click", function () {
  fetchBusinessNews();
});
sportBtn.addEventListener("click", function () {
  fetchSportNews();
});
entertainmentBtn.addEventListener("click", function () {
  fetchEntertainmentNews();
});
technologyBtn.addEventListener("click", function () {
  fetchTechnologyNews();
});
searchBtn.addEventListener("click", function () {
  fetchQueryNews();
});

const fetchGeneralNews = async () => {
  const responce = await fetch(GENERAL_NEWS);
  newsDataArr = [];
  if (responce.status >= 200 && responce.status < 300) {
    const myJson = await responce.json();
    console.log(myJson);
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(responce.status, responce.statusText);
  }
  displayNews();
};
const fetchBusinessNews = async () => {
  const responce = await fetch(BUSINESS_NEWS);
  newsDataArr = [];
  if (responce.status >= 200 && responce.status < 300) {
    const myJson = await responce.json();
    console.log(myJson);
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(responce.status, responce.statusText);
  }
  displayNews();
};
const fetchSportNews = async () => {
  const responce = await fetch(SPORT_NEWS);
  newsDataArr = [];

  if (responce.status >= 200 && responce.status < 300) {
    const myJson = await responce.json();
    console.log(myJson);
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(responce.status, responce.statusText);
  }
  displayNews();
};
const fetchEntertainmentNews = async () => {
  const responce = await fetch(ENTERTAINMENT_NEWS);
  newsDataArr = [];
  if (responce.status >= 200 && responce.status < 300) {
    const myJson = await responce.json();
    console.log(myJson);
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(responce.status, responce.statusText);
  }
  displayNews();
};
const fetchTechnologyNews = async () => {
  const responce = await fetch(TECHNOLOGY_NEWS);
  newsDataArr = [];

  if (responce.status >= 200 && responce.status < 300) {
    const myJson = await responce.json();
    console.log(myJson);
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(responce.status, responce.statusText);
  }
  displayNews();
};
const fetchQueryNews = async () => {
  if (newsQuery.value == null) return;
  const responce = await fetch(
    SEARCH_NEWS + encodeURIComponent(newsQuery.value) + "&apiKey="
  );
  newsDataArr = [];

  if (responce.status >= 200 && responce.status < 300) {
    const myJson = await responce.json();
    console.log(myJson);
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(responce.status, responce.statusText);
  }
  displayNews();
};

function displayNews() {
  newsDetails.innerHTML = "";
  if (newsDataArr.length === 0) {
    newsDetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }
  newsDataArr.forEach((news) => {
    let date = news.publishedAt.split("T");

    let col = document.createElement("div");
    col.className = "col-sm-12 col-md-4 col-lg-3 p-2 card";

    var card = document.createElement("div");
    card.className = "p-2";

    var image = document.createElement("img");
    image.setAttribute("height", "matchparnt");
    image.setAttribute("width", "100%");
    image.src = news.urlToImage;

    var cardBody = document.createElement("div");

    var newsHeading = document.createElement("h5");
    newsHeading.className = "card-title";
    newsHeading.innerHTML = news.title;

    var dateHeading = document.createElement("h6");
    dateHeading.className = "text-primary";
    dateHeading.innerHTML = date[0];

    var discription = document.createElement("p");
    discription.className = "text-muted";
    discription.innerHTML = news.description;

    var link = document.createElement("a");
    link.className = "btn btn-dark";
    link.setAttribute("target", "_blank");
    link.herf = news.url;
    link.innerHTML = "Read more";

    cardBody.appendChild(newsHeading);
    cardBody.appendChild(dateHeading);
    cardBody.appendChild(discription);
    cardBody.appendChild(link);

    card.appendChild(image);
    card.appendChild(cardBody);

    newsDetails.appendChild(col);
  });
}
