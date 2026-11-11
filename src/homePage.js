import { generateButton } from "./buttons.js";
import shrimpsImgPath from "./assets/images/shrimps.jpg";
import mealImgPath from "./assets/images/meal.jpg";
import pizzaImgPath from "./assets/images/pizza.jpg";

function generateSectionOne() {
    const sectionOneContainer = document.createElement("div");
    sectionOneContainer.classList.add("section-one");
    
    const subTitle = document.createElement("p");
    subTitle.classList.add("sub-title");
    subTitle.textContent = "[ [ Seasonal kitchen · San Francisco ] ]";
    sectionOneContainer.appendChild(subTitle);

    const title = document.createElement("h1");
    title.textContent = "Good food. Rooted in the season."
    title.classList.add("green-text");
    sectionOneContainer.appendChild(title);

    const img = document.createElement("img");
    img.setAttribute("src", shrimpsImgPath);
    img.setAttribute("alt", "A table with cooked shrimps");
    sectionOneContainer.appendChild(img);

    const paragraph = document.createElement("p");
    paragraph.textContent = "A celebration of California's freshest ingredients, thoughtful cooking, and the simple pleasure of gathering around a table";
    sectionOneContainer.appendChild(paragraph);

    return sectionOneContainer;
}

function generateSectionTwo() {
    const sectionTwoContainer = document.createElement("div");
    sectionTwoContainer.classList.add("section-two");

    const imgContainer = document.createElement("div");
    sectionTwoContainer.appendChild(imgContainer);

    const img = document.createElement("img");
    img.setAttribute("src", mealImgPath);
    img.setAttribute("alt", "A bowl with full of food");
    imgContainer.appendChild(img);

    const stamp = document.createElement("div");
    stamp.classList.add("stamp");
    imgContainer.appendChild(stamp);

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    stamp.appendChild(svg);

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z");
    svg.appendChild(path);

    const stampText = document.createElement("p");
    stampText.textContent = "Fresh from the season";
    stampText.classList.add("stamp-text");
    stamp.appendChild(stampText);

    return sectionTwoContainer;
}

function generateSectionThree() {
    const sectionThreeContainer = document.createElement("div");
    sectionThreeContainer.classList.add("section-three");

    const article = document.createElement("article");
    sectionThreeContainer.appendChild(article);

    const img = document.createElement("img");
    img.setAttribute("src", pizzaImgPath);
    img.setAttribute("alt", "Friends sharing a Pizza together");
    const articleTitle = document.createElement("h3");
    articleTitle.textContent = "Beyti Kebab";
    const articleSubTitle = document.createElement("p");
    articleSubTitle.textContent = "Fresh Spring Flavors";
    const articleParagraph = document.createElement("p");
    articleParagraph.textContent = "Peas, asparaguys, and pecorino cheese";

    article.appendChild(img);
    article.appendChild(articleTitle);
    article.appendChild(articleSubTitle);
    article.appendChild(articleParagraph);

    const rating = document.createElement("div");
    rating.setAttribute("id", "rating");
    sectionThreeContainer.appendChild(rating);

    const ratingTitle = document.createElement("h2");
    ratingTitle.textContent = "Rating";
    const ratingParagraph = document.createElement("p");
    ratingParagraph.textContent = "Trusted Globally by Our Clients"
    const ratingButton = generateButton("dark", "Explore the menu");

    rating.appendChild(ratingTitle);
    rating.appendChild(ratingParagraph);
    rating.appendChild(ratingButton);

    return sectionThreeContainer;
}

function loadHomePage() {
    const main = document.createElement("main");
    main.setAttribute("id", "home-page");
    main.appendChild(generateSectionOne());
    main.appendChild(generateSectionTwo());
    main.appendChild(generateSectionThree());
    return main;
}

export {loadHomePage};