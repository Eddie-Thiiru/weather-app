import { pageLayout, headerLayout, mainSectionLayout } from "./layout.js";
import { headerContent, mainContent } from "./data.js";

function component() {
  pageLayout();
  headerLayout();
  mainSectionLayout();
  headerContent();
  mainContent();
}
component();
