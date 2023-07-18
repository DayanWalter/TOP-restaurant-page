/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainContent */ \"./src/mainContent.js\");\n\n\nconsole.log(\"Everything righty?\");\n(0,_mainContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/mainContent.js":
/*!****************************!*\
  !*** ./src/mainContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mainContent)\n/* harmony export */ });\nfunction mainContent() {\n  // Content erstellen\n  let content = document.getElementById(\"content\");\n\n  // Container erstellen\n  let container = document.createElement(\"div\");\n  container.className = \"container\";\n\n  // Header erstellen\n  let header = document.createElement(\"div\");\n  header.className = \"header\";\n\n  // Header-Buttons erstellen\n  let homeBtn = document.createElement(\"div\");\n  homeBtn.className = \"headerBtn\";\n  homeBtn.textContent = \"Home\";\n\n  let menuBtn = document.createElement(\"div\");\n  menuBtn.className = \"headerBtn\";\n  menuBtn.textContent = \"Menu\";\n\n  let contactBtn = document.createElement(\"div\");\n  contactBtn.className = \"headerBtn\";\n  contactBtn.textContent = \"Contact\";\n\n  // Header-Buttons zum Header hinzufügen\n  header.appendChild(homeBtn);\n  header.appendChild(menuBtn);\n  header.appendChild(contactBtn);\n\n  // Header zum Container hinzufügen\n  container.appendChild(header);\n\n  // Main-Bereich erstellen\n  let main = document.createElement(\"div\");\n  main.className = \"main\";\n\n  // Main-Content erstellen\n  let mainContent = document.createElement(\"div\");\n  mainContent.className = \"main-content\";\n\n  // Überschrift erstellen\n  let heading = document.createElement(\"h1\");\n  heading.textContent = \"Welcome in our Donut-World!\";\n  mainContent.appendChild(heading);\n\n  // Gruß erstellen\n  let greeting = document.createElement(\"div\");\n  greeting.className = \"greeting\";\n\n  let greetingHeading = document.createElement(\"h3\");\n  greetingHeading.textContent =\n    \"We are here to provide the best Donuts in Central America!\";\n  greeting.appendChild(greetingHeading);\n\n  let greetingText = document.createElement(\"span\");\n  greetingText.textContent =\n    \"Choose between 7 different compositions from all around the world. Look at our menu to see our different flavours.\";\n  greeting.appendChild(greetingText);\n\n  mainContent.appendChild(greeting);\n\n  // Öffnungszeiten erstellen\n  let opening = document.createElement(\"div\");\n  opening.className = \"opening\";\n\n  let openingHeading = document.createElement(\"h3\");\n  openingHeading.textContent = \"Our opening hours are as follows:\";\n  opening.appendChild(openingHeading);\n\n  let openingList = document.createElement(\"ul\");\n  let openingHoursMonday = document.createElement(\"li\");\n  openingHoursMonday.textContent = \"Monday till Saturday: 6am - 6pm\";\n  openingList.appendChild(openingHoursMonday);\n\n  let openingHoursSunday = document.createElement(\"li\");\n  openingHoursSunday.textContent = \"Sunday: 8am - 11am\";\n  openingList.appendChild(openingHoursSunday);\n\n  opening.appendChild(openingList);\n  mainContent.appendChild(opening);\n\n  // Standort erstellen\n  let location = document.createElement(\"div\");\n  location.className = \"location\";\n\n  let locationHeading = document.createElement(\"h3\");\n  locationHeading.textContent = \"Location\";\n  location.appendChild(locationHeading);\n\n  let locationText = document.createElement(\"span\");\n  locationText.textContent =\n    \"MQMH+RG9, Blvr. Los Proceres, San Salvador, El Salvador\";\n  location.appendChild(locationText);\n\n  mainContent.appendChild(location);\n\n  // Main-Content zum Main-Bereich hinzufügen\n  main.appendChild(mainContent);\n\n  // Main-Bereich zum Container hinzufügen\n  container.appendChild(main);\n\n  // Footer erstellen\n  let footer = document.createElement(\"div\");\n  footer.className = \"footer\";\n\n  // Footer-Buttons erstellen\n  let footerBtn1 = document.createElement(\"div\");\n  footerBtn1.className = \"footerBtn\";\n  footerBtn1.textContent = \"Sources\";\n\n  let footerBtn2 = document.createElement(\"div\");\n  footerBtn2.className = \"footerBtn\";\n  footerBtn2.textContent = \"Sources\";\n\n  let footerBtn3 = document.createElement(\"div\");\n  footerBtn3.className = \"footerBtn\";\n  footerBtn3.textContent = \"Sources\";\n\n  // Footer-Buttons zum Footer hinzufügen\n  footer.appendChild(footerBtn1);\n  footer.appendChild(footerBtn2);\n  footer.appendChild(footerBtn3);\n\n  // Footer zum Container hinzufügen\n  container.appendChild(footer);\n\n  // Den Container zum content div hinzufügen\n  content.appendChild(container);\n\n  // Die Content Div zum DOM hinzufügen\n  document.body.appendChild(content);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/mainContent.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;