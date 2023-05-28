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

  const searchInput = document.getElementById("search-box");
  const searchBtn = document.querySelector(".search-btn");

  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    mainContent().searchLocation();
  });

  searchInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      e.preventDefault();

      mainContent().searchLocation();
    }
  });
}
component();
