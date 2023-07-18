export default function mainContent() {
  // Content erstellen
  let content = document.getElementById("content");
  content.innerHTML = "";
  // Container erstellen
  let container = document.createElement("div");
  container.className = "container";

  // Header erstellen
  let header = document.createElement("div");
  header.className = "header";

  // Header-Buttons erstellen
  let homeBtn = document.createElement("div");
  homeBtn.className = "headerBtn";
  homeBtn.id = "homeBtn";
  homeBtn.textContent = "Home";

  let menuBtn = document.createElement("div");
  menuBtn.className = "headerBtn";
  menuBtn.id = "menuBtn";
  menuBtn.textContent = "Menu";

  let contactBtn = document.createElement("div");
  contactBtn.className = "headerBtn";
  contactBtn.id = "contactBtn";
  contactBtn.textContent = "Contact";

  // Header-Buttons zum Header hinzufügen
  header.appendChild(homeBtn);
  header.appendChild(menuBtn);
  header.appendChild(contactBtn);

  // Header zum Container hinzufügen
  container.appendChild(header);

  // Main-Bereich erstellen
  let main = document.createElement("div");
  main.className = "main";

  // Main-Content erstellen
  let mainContent = document.createElement("div");
  mainContent.className = "main-content";

  // Überschrift erstellen
  let heading = document.createElement("h1");
  heading.textContent = "Welcome in our Donut-World!";
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

  // Main-Bereich zum Container hinzufügen
  container.appendChild(main);

  // Footer erstellen
  let footer = document.createElement("div");
  footer.className = "footer";

  // Footer-Buttons erstellen
  let footerBtn1 = document.createElement("div");
  footerBtn1.className = "footerBtn";
  footerBtn1.textContent = "Sources";

  let footerBtn2 = document.createElement("div");
  footerBtn2.className = "footerBtn";
  footerBtn2.textContent = "Sources";

  let footerBtn3 = document.createElement("div");
  footerBtn3.className = "footerBtn";
  footerBtn3.textContent = "Sources";

  // Footer-Buttons zum Footer hinzufügen
  footer.appendChild(footerBtn1);
  footer.appendChild(footerBtn2);
  footer.appendChild(footerBtn3);

  // Footer zum Container hinzufügen
  container.appendChild(footer);

  // Den Container zum content div hinzufügen
  content.appendChild(container);

  // Die Content Div zum DOM hinzufügen
  document.body.appendChild(content);
}
