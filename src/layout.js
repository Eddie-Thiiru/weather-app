import "./styles.css";

const pageLayout = () => {
  const content = document.querySelector(".content");
  const pageHeader = document.createElement("div");
  const pageMain = document.createElement("div");
  const pageFooter = document.createElement("div");

  pageHeader.classList.add("header");
  pageMain.classList.add("main-section");
  pageFooter.classList.add("footer");

  content.appendChild(pageHeader);
  content.appendChild(pageMain);
  content.appendChild(pageFooter);
};

const headerLayout = () => {
  const pageHeader = document.querySelector(".header");
  const searchWrapper = document.createElement("div");
  const searchLabel = document.createElement("label");
  const searchInput = document.createElement("input");

  searchWrapper.classList.add("search-wrapper");
  searchLabel.htmlFor = "search-box";
  searchInput.type = "text";
  searchInput.name = "search-box";
  searchInput.id = "search-box";
  searchInput.placeholder = "Search for location";

  searchWrapper.appendChild(searchLabel);
  searchWrapper.appendChild(searchInput);
  pageHeader.appendChild(searchWrapper);
};

const mainSectionLayout = () => {
  const pageMain = document.querySelector(".main-section");
  const title = document.createElement("div");
  const date = document.createElement("div");
  const tempWrapper = document.createElement("div");
  const temp = document.createElement("div");
  const weatherIcon = document.createElement("img");
  const weather = document.createElement("div");

  title.classList.add("title");
  date.classList.add("date");
  tempWrapper.classList.add("temp-wrapper");
  temp.classList.add("temp");
  weatherIcon.classList.add("weather-icon");
  weatherIcon.alt = "weather icon";
  weather.classList.add("weather");

  tempWrapper.appendChild(weatherIcon);
  tempWrapper.appendChild(temp);
  pageMain.appendChild(title);
  pageMain.appendChild(date);
  pageMain.appendChild(tempWrapper);
  pageMain.appendChild(weather);
};

export { pageLayout, headerLayout, mainSectionLayout };
