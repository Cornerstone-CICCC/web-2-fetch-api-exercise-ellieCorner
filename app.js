const url =
  "https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const weather = data.current;
    const timezone = data.timezone;
    const timestamp = weather.time;

    document.getElementById(
      "temperature"
    ).textContent = `Temperature: ${weather.temperature_2m} °C`;
    document.getElementById(
      "wind"
    ).textContent = `Wind speed: ${weather.wind_speed_10m} km/h`;
    document.getElementById("timezone").textContent = `Timezone: ${timezone}`;

    const readableTime = new Date(timestamp).toLocaleString();
    document.getElementById(
      "time"
    ).textContent = `Last updated: ${readableTime}`;
  })
  .catch((error) => {
    console.error("Failed to fetch weather data:", error);
  });
