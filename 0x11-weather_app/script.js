let weather = {
  apiKey: "fd14c8eb94b816316764ed5c6bb7368b",
  fetchWeather: () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=France&unit=metric&limit=5&appid=fd14c8eb94b816316764ed5c6bb7368b"
    )
      .then((responce) => responce.json())
      .then((data) => console.log(data));
  },
  displayWeather: () => {},
};
