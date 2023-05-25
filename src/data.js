const weatherData = async () => {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=67e874d11b194cf4a5760102232405&q=nairobi",
    { mode: "cors" }
  );
  const data = await response.json();

  return data;
};

const headerContent = () => {};

const mainContent = () => {
  const title = document.querySelector(".title");
  const date = document.querySelector(".date");
  const temp = document.querySelector(".temp");
  const weatherIcon = document.querySelector(".weather-icon");
  const weather = document.querySelector(".weather");

  weatherData().then((data) => {
    title.textContent = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
    date.textContent = data.location.localtime;
    weatherIcon.src = `https:${data.current.condition.icon}`;
    temp.textContent = `${data.current.temp_c}°C / ${data.current.temp_f}°F`;
    weather.textContent = data.current.condition.text;
  });
};

export { headerContent, mainContent };
