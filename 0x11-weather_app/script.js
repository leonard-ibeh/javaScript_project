"use strict";

let weather = {
  apiKey: "fd14c8eb94b816316764ed5c6bb7368b",
  fetchWeather: function () {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=France&units=metric&limit=5&appid=fd14c8eb94b816316764ed5c6bb7368b"
    )
      .then((responce) => responce.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, temp, speed, humidity, description);
    document.querySelector(".city").innerText = "Weather in " + name;
    // document.querySelector(".icon").src = icon;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
  },
};
