export default function contact() {
  //Main löschen
  let main = document.querySelector(".main");

  main.innerHTML = "";

  // Main-Content erstellen
  let mainContent = document.createElement("div");
  mainContent.className = "main-content";

  // Überschrift erstellen
  let heading = document.createElement("h1");
  heading.textContent = "Contact";
  mainContent.appendChild(heading);

  // Gruß erstellen
  let greeting = document.createElement("div");
  greeting.className = "greeting";

  let greetingHeading = document.createElement("h3");
  greetingHeading.textContent = "Give us a call or drop us a line.";
  greeting.appendChild(greetingHeading);

  let emailText = document.createElement("span");
  emailText.textContent = "Email: info@donutworld.com";
  greeting.appendChild(emailText);

  let lineBreak = document.createElement("br");
  greeting.appendChild(lineBreak);

  let telefoneText = document.createElement("span");
  telefoneText.textContent = "Phone: + 503 4321 334-0-671";
  greeting.appendChild(telefoneText);

  mainContent.appendChild(greeting);

  // Main-Content zum Main-Bereich hinzufügen
  main.appendChild(mainContent);
}
