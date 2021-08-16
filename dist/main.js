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

/***/ "./src/List.js":
/*!*********************!*\
  !*** ./src/List.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": () => (/* binding */ List)\n/* harmony export */ });\nclass List {\r\n    constructor(name) {\r\n        this.name = name;\r\n    }\r\n    get listName(){\r\n        return this.name;\r\n    }\r\n    createListElement(){\r\n        const list = document.createElement('div');\r\n        list.classList.add('list','flex');\r\n        const listLeft = document.createElement('div');\r\n        listLeft.classList.add('list-left','flex');\r\n        const icon = document.createElement('i');\r\n        icon.classList.add('fas','fa-tasks');\r\n        const nameOfList = document.createElement('h3');\r\n        nameOfList.innerText = this.name;\r\n        const listRight = document.createElement('div');\r\n        listRight.classList.add('list-right','flex');\r\n        const deleteList = document.createElement('i');\r\n        deleteList.classList.add('fas', 'fa-times', 'delete-list');\r\n        listLeft.appendChild(icon);\r\n        listLeft.appendChild(nameOfList);\r\n        list.appendChild(listLeft);\r\n        listRight.appendChild(deleteList);\r\n        list.appendChild(listRight);\r\n        return list;\r\n    }\r\n}\n\n//# sourceURL=webpack://todolist/./src/List.js?");

/***/ }),

/***/ "./src/Storage.js":
/*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Storage\": () => (/* binding */ Storage)\n/* harmony export */ });\nclass Storage {\r\n    constructor(itemKey,itemValue) {\r\n        this.itemKey = itemKey;\r\n        this.itemValue = itemValue;\r\n        localStorage.setItem(itemKey,JSON.stringify(this.itemValue));\r\n    }\r\n    get value(){\r\n        return JSON.parse(localStorage.getItem(this.itemKey));\r\n    }\r\n    addValue(val){\r\n        this.itemValue.push(val);\r\n    }\r\n}\n\n//# sourceURL=webpack://todolist/./src/Storage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ \"./src/List.js\");\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ \"./src/Storage.js\");\n\r\n\r\n\r\nconst lists = document.querySelector('.lists');\r\nconst list1 = new _List__WEBPACK_IMPORTED_MODULE_0__.List('Shopping');\r\nconst list2 = new _List__WEBPACK_IMPORTED_MODULE_0__.List(\"Personal\");\r\nconst listsArray = [list1.listName,list2.listName];\r\nconst storage = new _Storage__WEBPACK_IMPORTED_MODULE_1__.Storage('lists',listsArray);\r\nlists.appendChild(list1.createListElement());\r\nlists.appendChild(list2.createListElement());\n\n//# sourceURL=webpack://todolist/./src/index.js?");

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