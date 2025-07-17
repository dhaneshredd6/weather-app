const form = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const resultCard = document.getElementById('weather-result');
const cityNameElem = document.getElementById('city-name');
const tempElem = document.getElementById('temperature');
const windElem = document.getElementById('windspeed');
const conditionElem = document.getElementById('condition');
const forecastContainer = document.getElementById('forecast');
const currentIcon = document.getElementById('current-icon');
const themeToggleBtn = document.getElementById('theme-toggle');

// Map Open-Meteo weather codes to descriptions and icons
const weatherCodes = {
  0: { desc: "Clear sky", icon: "☀️" },
  1: { desc: "Mainly clear", icon: "🌤️" },
  2: { desc: "Partly cloudy", icon: "⛅" },
  3: { desc: "Overcast", icon: "☁️" },
  45: { desc: "Fog", icon: "🌫️" },
  48: { desc: "Depositing rime fog", icon: "🌫️" },
  51: { desc: "Light drizzle", icon: "🌧️" },
  53: { desc: "Moderate drizzle", icon: "🌧️" },
  55: { desc: "Dense drizzle", icon: "🌧️" },
  56: { desc: "Light freezing drizzle", icon: "🌧️❄️" },
  57: { desc: "Dense freezing drizzle", icon: "🌧️❄️" },
  61: { desc: "Slight rain", icon: "🌧️" },
  63: { desc: "Moderate rain", icon: "🌧️" },
  65: { desc: "Heavy rain", icon: "🌧️" },
  66: { desc: "Light freezing rain", icon: "🌧️❄️" },
  67: { desc: "Heavy freezing rain", icon: "🌧️❄️" },
  71: { desc: "Slight snow fall", icon: "🌨️" },
  73: { desc: "Moderate snow fall", icon: "🌨️" },
  75: { desc: "Heavy snow fall", icon: "❄️" },
  77: { desc: "Snow grains", icon: "❄️" },
  80: { desc: "Slight rain showers", icon: "🌦️" },
  81: { desc: "Moderate rain showers", icon: "🌦️" },
  82: { desc: "Violent rain showers", icon: "⛈️" },
  85: { desc: "Slight snow showers", icon: "🌨️" },
  86: { desc: "Heavy snow showers", icon: "❄️" },
  95: { desc: "Thunderstorm", icon: "⛈️" },
  96: { desc: "Thunderstorm with slight hail", icon: "⛈️" },
  99: { desc: "Thunderstorm with heavy hail", icon: "⛈️" },
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();

  if (!city) return;

  try {
    // Get coordinates from city name (Open-Meteo Geocoding API)
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`);
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      alert("City not found. Please try again.");
      return;
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    // Fetch current weather and 5-day forecast
    // daily=temperature_2m_max,temperature_2m_min,weathercode for forecast
    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`);
    const weatherData = await weatherRes.json();

    const current = weatherData.current_weather;
    const daily = weatherData.daily;

    // Display current weather
    cityNameElem.textContent = `${name}, ${country}`;
    tempElem.textContent = current.temperature;
    windElem.textContent = current.windspeed;
    const currentWeatherInfo = weatherCodes[current.weathercode] || { desc: "Unknown", icon: "❓" };
    conditionElem.textContent = currentWeatherInfo.desc;
    currentIcon.textContent = currentWeatherInfo.icon;

    // Display 5-day forecast
    forecastContainer.innerHTML = ''; // Clear previous

    for (let i = 0; i < 5; i++) {
      const dateStr = daily.time[i];
      const maxTemp = daily.temperature_2m_max[i];
      const minTemp = daily.temperature_2m_min[i];
      const code = daily.weathercode[i];
      const weatherInfo = weatherCodes[code] || { desc: "Unknown", icon: "❓" };

      const dateObj = new Date(dateStr);
      const dayName = dateObj.toLocaleDateString(undefined, { weekday: 'short' });

      const dayDiv = document.createElement('div');
      dayDiv.classList.add('forecast-day');

      dayDiv.innerHTML = `
        <div>${dayName}</div>
        <div title="${weatherInfo.desc}" aria-label="${weatherInfo.desc}">${weatherInfo.icon}</div>
        <div>${minTemp}° / ${maxTemp}°</div>
      `;

      forecastContainer.appendChild(dayDiv);
    }

    resultCard.classList.remove('hidden');
  } catch (error) {
    console.error(error);
    alert('Failed to fetch weather data.');
  }
});

// Dark/Light theme toggle
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    themeToggleBtn.textContent = '☀️ Light Mode';
  } else {
    themeToggleBtn.textContent = '🌙 Dark Mode';
  }
});
