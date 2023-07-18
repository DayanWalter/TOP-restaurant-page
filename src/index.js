import "./styles.css";
import "./mainBG.jpg";
import mainContent from "./mainContent";

console.log("Everything righty?");
mainContent();
const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", mainContent);

let menuBtn = document.getElementById("menuBtn");
function logging() {
  console.log("menuBtn");
}
menuBtn.addEventListener("click", logging);
