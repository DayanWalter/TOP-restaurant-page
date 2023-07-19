import northAmericaImage from "./pictures/northamerica.jpg";
import southAmericaImage from "./pictures/southamerica.jpg";
import europeImage from "./pictures/europe.jpg";
import africaImage from "./pictures/africa.jpg";
import asiaImage from "./pictures/asia.jpg";
import australiaImage from "./pictures/australia.jpg";
import antarcticaImage from "./pictures/antarctica.jpg";

export default function menu() {
  //delete main
  let main = document.querySelector(".main");

  main.innerHTML = "";

  //create main-content
  let mainContent = document.createElement("div");
  mainContent.className = "main-content";

  //create heading
  let heading = document.createElement("h1");
  heading.textContent = "Menu";
  mainContent.appendChild(heading);

  //create greeting
  let greeting = document.createElement("div");
  greeting.className = "greeting";

  let greetingHeading = document.createElement("h3");
  greetingHeading.textContent = "Have a look at our delicious donuts.";
  greeting.appendChild(greetingHeading);
  // same
  //create donut-box
  let donutContainer = document.createElement("div");
  donutContainer.className = "donut-box";

  //array with donut data
  let donuts = [
    { name: "North America", imagePath: northAmericaImage },
    { name: "South America", imagePath: southAmericaImage },
    { name: "Europe", imagePath: europeImage },
    { name: "Africa", imagePath: africaImage },
    { name: "Asia", imagePath: asiaImage },
    { name: "Australia", imagePath: australiaImage },
    { name: "Antarctica", imagePath: antarcticaImage },
  ];

  //create donut elements and add to donutContainer
  donuts.forEach(function (donutData) {
    let donutElement = document.createElement("div");
    donutElement.className = "donut";
    donutElement.textContent = donutData.name;

    let donutImage = document.createElement("img");
    donutImage.src = donutData.imagePath;
    donutImage.alt = "";

    donutElement.appendChild(donutImage);
    donutContainer.appendChild(donutElement);
  });

  //add elements to the DOM
  greeting.appendChild(donutContainer);
  mainContent.appendChild(greeting);

  //add mainContent to main
  main.appendChild(mainContent);
}
