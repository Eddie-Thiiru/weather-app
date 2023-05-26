import { pageLayout, headerLayout, mainSectionLayout } from "./layout.js";
import { mainContent } from "./data.js";

function component() {
  pageLayout();
  headerLayout();
  mainSectionLayout();

  mainContent().defaultLocation();

  const searchBtn = document.querySelector(".search-btn");

  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    mainContent().searchLocation();
  });
}
component();
