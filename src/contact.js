export default function contact() {
  //Main löschen
  let main = document.querySelector(".main");

  main.innerHTML = "";

  // Main-Content erstellen
  let mainContent = document.createElement("div");
  mainContent.className = "main-content";

  // Überschrift erstellen
  let heading = document.createElement("h1");
  heading.textContent = "Welcome in our contact-World!";
  mainContent.appendChild(heading);

  // Gruß erstellen
  let greeting = document.createElement("div");
  greeting.className = "greeting";

  let greetingHeading = document.createElement("h3");
  greetingHeading.textContent =
    "We are here to provide the best Donuts in Central America!";
  greeting.appendChild(greetingHeading);

  let greetingText = document.createElement("span");
  greetingText.textContent =
    "Choose between 7 different compositions from all around the world. Look at our menu to see our different flavours.";
  greeting.appendChild(greetingText);

  mainContent.appendChild(greeting);

  // Öffnungszeiten erstellen
  let opening = document.createElement("div");
  opening.className = "opening";

  let openingHeading = document.createElement("h3");
  openingHeading.textContent = "Our opening hours are as follows:";
  opening.appendChild(openingHeading);

  let openingList = document.createElement("ul");
  let openingHoursMonday = document.createElement("li");
  openingHoursMonday.textContent = "Monday till Saturday: 6am - 6pm";
  openingList.appendChild(openingHoursMonday);

  let openingHoursSunday = document.createElement("li");
  openingHoursSunday.textContent = "Sunday: 8am - 11am";
  openingList.appendChild(openingHoursSunday);

  opening.appendChild(openingList);
  mainContent.appendChild(opening);

  // Standort erstellen
  let location = document.createElement("div");
  location.className = "location";

  let locationHeading = document.createElement("h3");
  locationHeading.textContent = "Location";
  location.appendChild(locationHeading);

  let locationText = document.createElement("span");
  locationText.textContent =
    "MQMH+RG9, Blvr. Los Proceres, San Salvador, El Salvador";
  location.appendChild(locationText);

  mainContent.appendChild(location);

  // Main-Content zum Main-Bereich hinzufügen
  main.appendChild(mainContent);
}
