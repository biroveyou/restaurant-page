function generateMenuTitle() {
    const container = document.createElement("div");
    container.setAttribute("id", "menu-title");
    
    const subTitle = document.createElement("p");
    subTitle.textContent = "[[ Fresh from the kitchen ]]";
    subTitle.classList.add("sub-title");
    container.appendChild(subTitle);

    const title = document.createElement("h1");
    title.textContent = "The season, on a plate.";
    container.appendChild(title);

    const paragraph = document.createElement("p");
    paragraph.textContent = "Familiar favorites. Fresh discoveries. A few of the dishes we're loving right now.";

    return container;
}

function generateMenu() {
    function createMenuCard(id, title, ingredients, price) {
        const card = document.createElement("div");
        card.classList.add("menu-card");
        card.setAttribute("id", id);

        const cardInfo = document.createElement("div");
        cardInfo.classList.add("card-info");

        const cardTitle = document.createElement("h2");
        cardTitle.textContent = title;
        const cardIngredients = document.createElement("p");
        cardIngredients.textContent = ingredients;

        cardInfo.appendChild(cardTitle);
        cardInfo.appendChild(cardIngredients);
        card.appendChild(cardInfo);

        const cardPrice = document.createElement("p");
        cardPrice.textContent = `$${price}`;
        cardPrice.classList.add("card-price");
        card.appendChild(cardPrice);

        return card;
    }
    
    const container = document.createElement("div");
    container.setAttribute("id", "menu-options");
    
    container.appendChild(createMenuCard(
        "garden-green-risotto", 
        "Garden green risotto", 
        "Spring peas, asparagus, pecorino",
        28
    ));
    container.appendChild(createMenuCard(
        "heirloom-burrata",
        "Heirloom & burrata",
        "Stone fruit, basil, aged balsamic",
        19
    ));
    container.appendChild(createMenuCard(
        "wood-fired-sea-bass",
        "Wood-fired sea bass",
        "Fennel, lemon butter, coastal herbs",
        36
    ));

    return container;
}

function loadMenuPage() {
    const main = document.createElement("main");
    main.setAttribute("id", "menu-page")
    main.appendChild(generateMenuTitle());
    main.appendChild(generateMenu());
    
    const additionalDetails = document.createElement("p");
    additionalDetails.textContent = "Our menu with the harvest. Please tell us abot any dietary needs.";
    main.appendChild(additionalDetails);
    
    return main;
}

export { loadMenuPage };