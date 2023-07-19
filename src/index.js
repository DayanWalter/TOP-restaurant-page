import "./styles.css";
import "./pictures/mainBG.jpg";
import wholeSite from "./wholeSite";
import home from "./home";
import menu from "./menu";
import contact from "./contact";

//Testsite:
import test from "./test";

wholeSite();
console.log(1);
// header button
const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", home);

const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", menu);

const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", contact);
