function generateButton(type, text) {
    const SVG_NS = "http://www.w3.org/2000/svg";

    const button = document.createElement("button");
    button.textContent = text;
    
    const iconContainer = document.createElement("div");
    iconContainer.classList.add("arrow-top-right");
    button.appendChild(iconContainer);

    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    iconContainer.appendChild(svg);
    
    const path = document.createElementNS(SVG_NS, "path");
    path.setAttribute("d", "M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z");
    svg.appendChild(path);

    switch (type) {
        case "light":
            button.classList.add("light-button");
            iconContainer.classList.add("light-icon");
            return button;
        case "dark":
            button.classList.add("dark-button");
            iconContainer.classList.add("dark-icon");
            return button;
    }
}

export {generateButton};