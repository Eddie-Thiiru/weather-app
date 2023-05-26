import "./styles.css";
import Img1 from "./images/wind.svg";
import Img2 from "./images/humidity.svg";
import Img3 from "./images/pressure.svg";
import Img4 from "./images/sun.svg";
import Img5 from "./images/search.svg";

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
  const searchImg = new Image();
  const error = document.createElement("span");

  searchForm.classList.add("search-form");
  searchLabel.htmlFor = "search-box";
  searchInput.type = "text";
  searchInput.name = "search-box";
  searchInput.id = "search-box";
  searchInput.placeholder = "Search for location";
  searchBtn.type = "button";
  searchBtn.classList.add("search-btn");
  searchImg.src = Img5;
  searchImg.alt = "Search icon";
  error.classList.add("search-error");

  searchBtn.appendChild(searchImg);
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
  const weather = document.createElement("div");

  title.classList.add("title");
  date.classList.add("date");
  tempWrapper.classList.add("temp-wrapper");
  temp.classList.add("temp");
  weather.classList.add("weather");

  tempWrapper.appendChild(temp);
  pageMain.appendChild(title);
  pageMain.appendChild(date);
  pageMain.appendChild(tempWrapper);
  pageMain.appendChild(weather);
};

const footerLayout = () => {
  const pageFooter = document.querySelector(".footer");
  const windContainer = document.createElement("div");
  const windIcon = new Image();
  const windWrapper = document.createElement("div");
  const windTitle = document.createElement("p");
  const windVal = document.createElement("p");
  const humidityContainer = document.createElement("div");
  const humidityIcon = new Image();
  const humidityWrapper = document.createElement("div");
  const humidityTitle = document.createElement("p");
  const humidityVal = document.createElement("p");
  const pressureContainer = document.createElement("div");
  const pressureIcon = new Image();
  const pressureWrapper = document.createElement("div");
  const pressureTitle = document.createElement("p");
  const pressureVal = document.createElement("p");
  const uvContainer = document.createElement("div");
  const uvIcon = new Image();
  const uvWrapper = document.createElement("div");
  const uvTitle = document.createElement("p");
  const uvVal = document.createElement("p");

  windWrapper.classList.add("wind-wrapper");
  windTitle.textContent = "Wind";
  windVal.classList.add("wind-value");
  windIcon.alt = "Wind icon";
  windIcon.src = Img1;
  humidityWrapper.classList.add("humidity-wrapper");
  humidityTitle.textContent = "Humidity";
  humidityVal.classList.add("humidity-value");
  humidityIcon.alt = "Humidity icon";
  humidityIcon.src = Img2;
  pressureWrapper.classList.add("pressure-wrapper");
  pressureTitle.textContent = "Pressure";
  pressureVal.classList.add("pressure-value");
  pressureIcon.alt = "Pressure icon";
  pressureIcon.src = Img3;
  uvWrapper.classList.add("uv-wrapper");
  uvTitle.textContent = "UV Index";
  uvVal.classList.add("uv-value");
  uvIcon.alt = "Uv icon";
  uvIcon.src = Img4;

  windWrapper.appendChild(windTitle);
  windWrapper.appendChild(windVal);
  windContainer.appendChild(windIcon);
  windContainer.appendChild(windWrapper);
  humidityWrapper.appendChild(humidityTitle);
  humidityWrapper.appendChild(humidityVal);
  humidityContainer.appendChild(humidityIcon);
  humidityContainer.appendChild(humidityWrapper);
  pressureWrapper.appendChild(pressureTitle);
  pressureWrapper.appendChild(pressureVal);
  pressureContainer.appendChild(pressureIcon);
  pressureContainer.appendChild(pressureWrapper);
  uvWrapper.appendChild(uvTitle);
  uvWrapper.appendChild(uvVal);
  uvContainer.appendChild(uvIcon);
  uvContainer.appendChild(uvWrapper);
  pageFooter.appendChild(windContainer);
  pageFooter.appendChild(humidityContainer);
  pageFooter.appendChild(pressureContainer);
  pageFooter.appendChild(uvContainer);
};

export { pageLayout, headerLayout, mainSectionLayout, footerLayout };
