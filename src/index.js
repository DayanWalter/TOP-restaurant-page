import "./styles.css";
import "./mainBG.jpg";
import wholeSite from "./wholeSite";
import home from "./home";

wholeSite();

const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", home);

let menuBtn = document.getElementById("menuBtn");
function logging() {
  console.log("menuBtn");
}
menuBtn.addEventListener("click", logging);
