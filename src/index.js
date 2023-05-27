import {
  pageLayout,
  headerLayout,
  mainSectionLayout,
  footerLayout,
} from "./layout.js";
import { mainContent } from "./data.js";

function component() {
  pageLayout();
  headerLayout();
  mainSectionLayout();
  footerLayout();
  mainContent().defaultLocation();

  const searchBtn = document.querySelector(".search-btn");

  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    mainContent().searchLocation();
  });
}
component();
