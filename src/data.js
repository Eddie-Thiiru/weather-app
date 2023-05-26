async function defaultWeatherData() {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=67e874d11b194cf4a5760102232405&q=nairobi",
    { mode: "cors" }
  );
  const data = await response.json();

  return data;
}

async function getSearchData(val) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=67e874d11b194cf4a5760102232405&q=${val}`,
    { mode: "cors" }
  );

  const data = await response.json();

  return data;
}

function handleErrors(err) {
  if (err > 1000) {
    const searchError = document.querySelector(".search-error");

    searchError.textContent = "No results found";

    setTimeout(() => {
      searchError.textContent = "";
    }, 3000);
  } else {
    console.log(err);
    throw new Error("Error");
  }
}

const mainContent = () => {
  const title = document.querySelector(".title");
  const date = document.querySelector(".date");
  const temp = document.querySelector(".temp");
  const weatherIcon = document.querySelector(".weather-icon");
  const weather = document.querySelector(".weather");

  const defaultLocation = () => {
    defaultWeatherData()
      .then((data) => {
        title.textContent = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
        date.textContent = data.location.localtime;
        weatherIcon.src = `https:${data.current.condition.icon}`;
        temp.textContent = `${data.current.temp_c}°C / ${data.current.temp_f}°F`;
      })
      .catch((err) => {
        handleErrors(err);
      });
  };

  const searchLocation = () => {
    const inputValue = document.getElementById("search-box").value;

    if (inputValue !== "") {
      getSearchData(inputValue).then((data) => {
        if (data.error.code >= 400) {
          handleErrors(data.error.code);
        } else {
          title.textContent = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
          date.textContent = data.location.localtime;
          weatherIcon.src = `https:${data.current.condition.icon}`;
          temp.textContent = `${data.current.temp_c}°C / ${data.current.temp_f}°F`;
          weather.textContent = data.current.condition.text;
        }
      });
    }
  };

  return { defaultLocation, searchLocation };
};

export { mainContent, getSearchData };
