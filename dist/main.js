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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', _modules_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadHomepage);\n\n\n//# sourceURL=webpack://rps/./src/index.js?");

/***/ }),

/***/ "./src/modules/RPS.js":
/*!****************************!*\
  !*** ./src/modules/RPS.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RPS)\n/* harmony export */ });\nclass RPS {\n    static playerSelection(e) {\n        RPS.result(e.target.id);\n    }\n\n    static computerSelection() {\n        const selection = Math.floor(Math.random() * 3);\n\n        if (selection === 0) {\n            return 'rock';\n        }\n        else if (selection === 1) {\n            return 'paper';\n        }\n        else if (selection === 2) {\n            return 'scissors';\n        }\n    }\n\n    static result(playerSelection) {\n        const computerSelection = RPS.computerSelection();\n\n        if (playerSelection === computerSelection) {\n            console.log('tie');\n            console.log('p:' + playerSelection);\n            console.log('cpu:' + computerSelection);\n        }\n    }\n}\n\n//# sourceURL=webpack://rps/./src/modules/RPS.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _RPS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RPS */ \"./src/modules/RPS.js\");\n\n\nclass UI {\n    static loadHomepage() {\n        UI.loadPrompt();\n    }\n\n    static loadPrompt() {\n        const startButton = document.querySelector('#start');\n        const prompt = document.querySelector('.prompt');\n\n        startButton.addEventListener('click', startGame);\n\n        function startGame() {\n            prompt.innerHTML = ``;\n            UI.initRpsButtons();\n        }\n    }\n\n    static initRpsButtons() {\n        const buttons = document.querySelector('.buttons');\n\n        buttons.innerHTML = `\n        <button id=\"rock\"  class=\"button\">Rock</button>\n        <button id=\"paper\" class=\"button\">Paper</button>\n        <button id=\"scissors\" class=\"button\">Scissors</button>`;\n\n        const rockButton = document.querySelector('#rock');\n        const paperButton = document.querySelector('#paper');\n        const scissorsButton = document.querySelector('#scissors');\n\n\n        rockButton.addEventListener('click', _RPS__WEBPACK_IMPORTED_MODULE_0__[\"default\"].playerSelection);\n        paperButton.addEventListener('click', _RPS__WEBPACK_IMPORTED_MODULE_0__[\"default\"].playerSelection);\n        scissorsButton.addEventListener('click', _RPS__WEBPACK_IMPORTED_MODULE_0__[\"default\"].playerSelection);\n    }\n\n\n}\n\n//# sourceURL=webpack://rps/./src/modules/UI.js?");

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