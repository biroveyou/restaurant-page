import "./styles.css";
import {loadHomePage} from "./homePage.js";

const pageContent = document.querySelector("#content");
pageContent.appendChild(loadHomePage());    