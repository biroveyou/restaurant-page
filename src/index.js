import "./styles.css";
import { loadHomePage } from "./homePage.js";
import { loadMenuPage } from "./menuPage.js";
import { loadVisitUsPage } from "./visitPage.js";

const pageContent = document.querySelector("#content");
function refreshContent() {
    pageContent.replaceChildren();
    const body = document.querySelector("body");
    if (body.classList.contains("visit-us-background")) {
        body.classList.remove("visit-us-background");
    }
}
function switchToHome() {
    refreshContent();
    pageContent.appendChild(loadHomePage());
}
function switchToMenu() {
    refreshContent();
    pageContent.appendChild(loadMenuPage());
}
function switchToVisit() {
    refreshContent();
    pageContent.appendChild(loadVisitUsPage());
}

const homeButton = document.querySelector("#home-tab");
const menuButton = document.querySelector("#menu-tab");
const visitButton = document.querySelector("#visit-tab");
homeButton.addEventListener("click", () => {
    switchToHome();
});
menuButton.addEventListener("click", () => {
    switchToMenu();
});
visitButton.addEventListener("click", () => {
    switchToVisit();
});

const homeQuickLink = document.querySelector("#home-quick-link");
const menuQuickLink = document.querySelector("#menu-quick-link");
const visitQuickLink = document.querySelector("#visit-quick-link");
homeQuickLink.addEventListener("click", () => {
    switchToHome();
});
menuQuickLink.addEventListener("click", () => {
    switchToMenu();
});
visitQuickLink.addEventListener("click", () => {
    switchToVisit();
});

const bookTableButton = document.querySelector(".light-button");
bookTableButton.addEventListener("click", () => {
    switchToVisit();
});

pageContent.appendChild(loadHomePage());

export { switchToHome, switchToMenu, switchToVisit };