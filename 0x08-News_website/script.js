"use scrict";

// Variables

const generalBtn = document.getElementById("general");
const businessBtn = document.getElementById("business");
const sportBtn = document.getElementById("sports");
const entertainmentBtn = document.getElementById("entertainment");
const technologyBtn = document.getElementById("technology");
const searchBtn = document.getElementById("searchBtn");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newdetails");

//  Array

let newsDataArr = [];

// apis

const API_KEY = "895eaaeebaec42ca88ded5d2856a5c9a";
const HEADLINES_NEWS =
  "https://newsapi.org/v2/top-headlines?country=ng&apikey=895eaaeebaec42ca88ded5d2856a5c9a";
const GENERAL_NEWS =
  "https://newsapi.org/v2/top-headlines?country=ng&category=general&apikey=895eaaeebaec42ca88ded5d2856a5c9a";
const BUSINESS_NEWS =
  "https://newsapi.org/v2/top-headlines?country=ng&category=business&apikey=895eaaeebaec42ca88ded5d2856a5c9a";
const SPORT_NEWS =
  "https://newsapi.org/v2/top-headlines?country=ng&category=sport&apikey=895eaaeebaec42ca88ded5d2856a5c9a";
const ENTERTAINMENT_NEWS =
  "https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apikey=895eaaeebaec42ca88ded5d2856a5c9a";
const TECHNOLOGY_NEWS =
  "https://newsapi.org/v2/top-headlines?country=ng&category=technology&apikey=895eaaeebaec42ca88ded5d2856a5c9a";
const SEARCH_NEWS =
  "https://newsapi.org/v2/everything?q=keyword&apiKey=895eaaeebaec42ca88ded5d2856a5c9a";

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
  const responce = await fetch(GENERAL_NEWS + API_KEY);
  newsDataArr = [];
  if (responce.status >= 200 && responce.status < 300) {
    const myJson = await responce.json();
    console.log(myJson);
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(responce.status, responce.statusText);
  }
};
const fetchBusinessNews = async () => {
  const responce = await fetch(BUSINESS_NEWS + API_KEY);
  newsDataArr = [];
  if (responce.status >= 200 && responce.status < 300) {
    const myJson = await responce.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(responce.status, responce.statusText);
  }
  displayNews();
};
const fetchSportNews = async () => {
  const responce = await fetch(SPORT_NEWS + API_KEY);
  newsDataArr = [];

  if (responce.status >= 200 && responce.status < 300) {
    const myJson = await responce.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(responce.status, responce.statusText);
  }
  displayNews();
};
const fetchEntertainmentNews = async () => {
  const responce = await fetch(ENTERTAINMENT_NEWS + API_KEY);
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
  const responce = await fetch(TECHNOLOGY_NEWS + API_KEY);
  newsDataArr = [];

  if (responce.status >= 200 && responce.status < 300) {
    const myJson = await responce.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(responce.status, responce.statusText);
  }
  displayNews();
};
const fetchQueryNews = async () => {
  if (newsQuery.value === null) return;
  const responce = await fetch(
    SEARCH_NEWS + encodeURIComponent(newsQuery.value) + "&apiKey=" + API_KEY
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
  // displayNews();
};

function displayNews() {
  if (newsDataArr.length == 0) {
    newsdetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }
  newsDataArr.forEach((news) => {
    var col = document.createElement("div");
    col.className = "col-sm-12 col-md-4 col-lg-3 p-2 card";

    var card = document.createElement("div");
    card.className = "p-2";

    var image = document.createElement("img");
    image.setAttribute("height", "matchparnt");
    image.setAttribute("width", "100%");
  });
}
