document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("weather-form");
  const cityInput = document.getElementById("city-input");
  let getWeatherBtn = document.getElementById("get-weather-btn");
  let weatherInfo = document.getElementById("weather-info");
  let cityName = document.getElementById("city-name");
  let temperature = document.getElementById("temperature");
  let description = document.getElementById("description");
  let errorMessage = document.getElementById("error-message");

  let API_Key = "0b8c5d03491049b34fb47d8ad6cd02a6";

  getWeatherBtn.addEventListener("click", async (e) => {
    e.preventDefault(); // Prevents form submission (if inside a form)

    let city = cityInput.value.trim();

    if (!city) {
      return;
    } else {
      try {
        const weatherData = await fetchWeatherDetails(city);
        displayWeatherData(weatherData);
      } catch (error) {
        showError();
      }
    }
    cityInput.value = "";
  });

  async function fetchWeatherDetails(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`;

    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    const { name, main, weather } = data;

    cityName.innerText = `CityName: ${name}`;
    temperature.innerText = `Temperature: ${main.temp}°C`;
    description.innerText = `Condition: ${weather[0].description}`;

    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
    errorMessage.innerText = "City not found. Please try again.";
  }
});
