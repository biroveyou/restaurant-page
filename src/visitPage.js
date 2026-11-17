import restaurantImgPath from "./assets/images/restaurant.jpg";

function generateVisitUsTitle() {
    const container = document.createElement("div");
    container.setAttribute("id", "visit-us-title");

    const subTitle = document.createElement("p");
    subTitle.textContent = "[[ Close to the source ]]";
    container.appendChild(subTitle);

    const title = document.createElement("h1");
    title.textContent = "Your table is waiting.";
    container.appendChild(title);

    const paragraph = document.createElement("p");
    paragraph.textContent = "Bring your favorite people. We'll bring something delicious. Join us in the heart of San Francisco.";
    container.appendChild(paragraph);

    return container;
}

function generateBookTableForm() {
    function createField(text, type, nameID) {
        const formField = document.createElement("div");
        formField.classList.add("form-field");

        const label = document.createElement("label");
        label.textContent = text;
        label.setAttribute("for", nameID);
        formField.appendChild(label);

        const input = document.createElement("input");
        input.setAttribute("type", type);
        input.setAttribute("name", nameID);
        input.setAttribute("id", nameID);
        formField.appendChild(input);

        return formField;
    }
    
    const container = document.createElement("div");
    container.setAttribute("id", "book-table-form");

    const form = document.createElement("form");
    form.setAttribute("action", "");
    container.appendChild(form);

    const title = document.createElement("h2");
    title.textContent = "Make it a date.";

    const fieldsContainer = document.createElement("div");
    const dateField = createField("Date", "date", "date-field");
    const guestsField = createField("Guests", "number", "guests-field");
    const guestsInput = guestsField.getElementsByTagName("input")[0];
    guestsInput.setAttribute("min", "1");
    guestsInput.setAttribute("max", "8");
    guestsInput.setAttribute("placeholder", "2 People");

    fieldsContainer.appendChild(dateField);
    fieldsContainer.appendChild(guestsField);

    const findTableButton = document.createElement("button");
    findTableButton.textContent = "Find a table"
    findTableButton.setAttribute("id", "find-table-btn");
    findTableButton.setAttribute("type", "button");

    const additionalDetails = document.createElement("p");
    additionalDetails.textContent = "For groups of 8 or more, call us at (123) 456-7890.";

    form.appendChild(title);
    form.appendChild(fieldsContainer);
    form.appendChild(findTableButton);
    form.appendChild(additionalDetails);

    return container;
}

function loadVisitUsPage() {
    const main = document.createElement("main");
    main.setAttribute("id", "visit-us-page")
    main.appendChild(generateVisitUsTitle());
    main.appendChild(generateBookTableForm());
    
    const body = document.querySelector("body");
    if (!body.classList.contains("visit-us-background")) {
        body.classList.add("visit-us-background");
    }
    
    return main;
}

export { loadVisitUsPage };