import "./styles.css";
import {loadHomePage} from "./homePage.js";
import { loadVisitUsPage } from "./visitPage.js";

const pageContent = document.querySelector("#content");
// pageContent.appendChild(loadHomePage());
pageContent.appendChild(loadVisitUsPage());