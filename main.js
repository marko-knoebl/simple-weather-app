const weatherApiUrl =
  "http://api.openweathermap.org/data/2.5/weather?appid=9d3ae54b4b75a62bd73707396325726e&q=";

const weatherDisplay = document.getElementById("weather-display");
const inputElement = document.getElementById("city-name");
const formElement = document.getElementById("weather-form");

const updateView = weatherData => {
  weatherDisplay.innerHTML = `
    <h1>${weatherData.name}</h1>
    <h2>${weatherData.weather[0].main}</h2>
    <img src="images/icons/${weatherData.weather[0].icon}.png">
  `;
};

const handleSubmit = submitEvent => {
  submitEvent.preventDefault();
  const cityName = inputElement.value;
  inputElement.value = "";
  const weatherUrl = weatherApiUrl + cityName;
  fetch(weatherUrl)
    .then(weatherData => weatherData.json())
    .then(updateView);
};
formElement.addEventListener("submit", handleSubmit);
