import "./styles.css";
import {generateButton} from "./buttons.js"

const body = document.querySelector("body");

const darkButtonExample = generateButton("dark", "Click on here!");
body.appendChild(darkButtonExample);
const lightButtonExample = generateButton("light", "Click on here!");
body.appendChild(lightButtonExample);

console.log("Just testing!");