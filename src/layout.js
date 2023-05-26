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
  const searchForm = document.createElement("form");
  const searchLabel = document.createElement("label");
  const searchInput = document.createElement("input");
  const searchBtn = document.createElement("button");
  const error = document.createElement("span");

  searchForm.classList.add("search-form");
  searchLabel.htmlFor = "search-box";
  searchInput.type = "text";
  searchInput.name = "search-box";
  searchInput.id = "search-box";
  searchInput.placeholder = "Search for location";
  searchBtn.type = "button";
  searchBtn.classList.add("search-btn");
  searchBtn.textContent = "search";
  error.classList.add("search-error");

  searchLabel.appendChild(searchInput);
  searchLabel.appendChild(error);
  searchForm.appendChild(searchLabel);
  searchForm.appendChild(searchBtn);
  pageHeader.appendChild(searchForm);
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
