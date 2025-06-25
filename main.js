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

/***/ "./src/aboutPage.js":
/*!**************************!*\
  !*** ./src/aboutPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutPage: () => (/* binding */ aboutPage)\n/* harmony export */ });\nfunction aboutPage() {\n    let divContent = document.querySelector(\"#content\");\n\n    let restaurantName = document.createElement(\"h1\");\n    restaurantName.textContent = \"About\";\n    divContent.appendChild(restaurantName);\n\n\n    let aboutDescription = document.createElement(\"p\");\n    aboutDescription.textContent = `Steve's bistro has the best food in town. Est 1988`;\n    divContent.appendChild(aboutDescription);\n\n}\n\n//# sourceURL=webpack://3-restaurantpage/./src/aboutPage.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homePage: () => (/* binding */ homePage)\n/* harmony export */ });\nfunction homePage() {\n    let divContent = document.querySelector(\"#content\");\n\n    let restaurantName = document.createElement(\"h1\");\n    restaurantName.textContent = \"Steve's Bistro!\";\n    divContent.appendChild(restaurantName);\n\n    let restaurantDescription = document.createElement(\"p\");\n    restaurantDescription.textContent = \"The best food ever.\";\n    divContent.appendChild(restaurantDescription);\n}\n\n//# sourceURL=webpack://3-restaurantpage/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n/* harmony import */ var _aboutPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutPage */ \"./src/aboutPage.js\");\n\n\n\n\nfunction setupButtons() {\n    let buttonHome = document.querySelector(\".buttonHome\");\n    let buttonMenu = document.querySelector(\".buttonMenu\");\n    let buttonAbout = document.querySelector(\".buttonAbout\");\n\n    buttonHome.addEventListener(\"click\", () => {\n        clearContent();\n        (0,_homePage__WEBPACK_IMPORTED_MODULE_0__.homePage)();\n    })\n\n    buttonMenu.addEventListener(\"click\", () => {\n        clearContent();\n        (0,_menuPage__WEBPACK_IMPORTED_MODULE_1__.menuPage)();\n    })\n\n    buttonAbout.addEventListener(\"click\", () => {\n        clearContent();\n        (0,_aboutPage__WEBPACK_IMPORTED_MODULE_2__.aboutPage)(); \n    })\n}\n\nfunction clearContent() {\n    let divContent = document.querySelector(\"#content\");\n    divContent.innerHTML = \"\";\n}\n\nsetupButtons();\n(0,_homePage__WEBPACK_IMPORTED_MODULE_0__.homePage)();\n\n\n\n//# sourceURL=webpack://3-restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuPage: () => (/* binding */ menuPage)\n/* harmony export */ });\nfunction menuPage() {\n    let divContent = document.querySelector(\"#content\");\n\n    let menuHeading = document.createElement(\"h1\");\n    menuHeading.textContent = \"Menu\";\n    divContent.appendChild(menuHeading);\n\n    for (let i = 0; i < 9; i++) {\n        let menuItem = document.createElement(\"p\");\n        menuItem.id = `item${i}`;\n        menuItem.textContent = `Meal${i}`;\n        divContent.appendChild(menuItem);\n    }\n}\n\n//# sourceURL=webpack://3-restaurantpage/./src/menuPage.js?");

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