import { format } from "date-fns";

const defaultWeatherData = async () => {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=67e874d11b194cf4a5760102232405&q=nairobi",
    { mode: "cors" }
  );

  const data = await response.json();

  return data;
};

const getSearchData = async (val) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=67e874d11b194cf4a5760102232405&q=${val}`,
    { mode: "cors" }
  );

  const data = await response.json();

  return data;
};

const handleErrors = async (err) => {
  if (err > 1000) {
    const searchError = document.querySelector(".search-error");

    searchError.textContent = "* No results found";

    setTimeout(() => {
      searchError.textContent = "";
    }, 2000);
  } else {
    throw new Error("Error");
  }
};

const mainContent = () => {
  const title = document.querySelector(".title");
  const date = document.querySelector(".date");
  const time = document.querySelector(".time");
  const tempWrapper = document.querySelector(".temp-wrapper");
  const temp = document.querySelector(".temp");
  const weather = document.querySelector(".weather");
  const wind = document.querySelector(".wind-value");
  const humidity = document.querySelector(".humidity-value");
  const pressure = document.querySelector(".pressure-value");
  const uv = document.querySelector(".uv-value");
  const weatherIcon = new Image();

  weatherIcon.alt = "weather icon";

  const defaultLocation = () => {
    defaultWeatherData()
      .then((data) => {
        const newDate = format(
          new Date(data.location.localtime),
          "EEE, do MMMM yyyy "
        );
        const newTime = format(new Date(data.location.localtime), "h:MM aaa");

        title.textContent = `${data.location.name}, ${data.location.country}`;
        date.textContent = newDate;
        time.textContent = newTime;
        weatherIcon.src = `https:${data.current.condition.icon}`;
        temp.textContent = `${data.current.temp_c}°C / ${data.current.temp_f}°F`;
        weather.textContent = data.current.condition.text;
        wind.textContent = `${data.current.wind_kph} km/h`;
        humidity.textContent = `${data.current.humidity}%`;
        pressure.textContent = `${data.current.pressure_mb} mb`;
        uv.textContent = `${data.current.uv} of 10`;

        tempWrapper.appendChild(weatherIcon);
      })
      .catch((err) => {
        handleErrors(err);
      });
  };

  const searchLocation = () => {
    const form = document.querySelector(".search-form");
    const inputValue = document.getElementById("search-box").value;

    if (inputValue !== "") {
      getSearchData(inputValue).then((data) => {
        if (data.error && data.error.code >= 400) {
          handleErrors(data.error.code);
        } else {
          // reset form after successful fetch
          form.reset();

          const newDate = format(
            new Date(data.location.localtime),
            "EEE, do MMMM yyyy "
          );
          const newTime = format(new Date(data.location.localtime), "h:MM aaa");

          title.textContent = `${data.location.name}, ${data.location.country}`;
          date.textContent = newDate;
          time.textContent = newTime;
          weatherIcon.src = `https:${data.current.condition.icon}`;
          temp.textContent = `${data.current.temp_c}°C / ${data.current.temp_f}°F`;
          weather.textContent = data.current.condition.text;
          wind.textContent = `${data.current.wind_kph} km/h`;
          humidity.textContent = `${data.current.humidity}%`;
          pressure.textContent = `${data.current.pressure_mb} mb`;
          uv.textContent = `${data.current.uv} of 10`;
        }
      });
    }
  };

  return { defaultLocation, searchLocation };
};

export { mainContent, getSearchData };
