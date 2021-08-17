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

/***/ "./src/AddListDialog.js":
/*!******************************!*\
  !*** ./src/AddListDialog.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddListDialog\": () => (/* binding */ AddListDialog)\n/* harmony export */ });\nclass AddListDialog {\r\n    constructor() {\r\n        let addListDialogContainer = this.createAddListDialogContainer();\r\n        let addListDialog = this.createAddListDialog();\r\n        addListDialogContainer.appendChild(addListDialog);\r\n        let addListDialogTop = this.createAddListDialogTop();\r\n        addListDialog.appendChild(addListDialogTop);\r\n        let addListHeading = this.createAddListHeading();\r\n        addListDialogTop.appendChild(addListHeading);\r\n        let addListDialogClose = this.createAddListDialogClose();\r\n        addListDialogTop.appendChild(addListDialogClose);\r\n        let addListName = this.createAddListName();\r\n        addListDialog.appendChild(addListName);\r\n        let addListButtons = this.createAddListButtons();\r\n        addListDialog.appendChild(addListButtons);\r\n        return addListDialogContainer;\r\n    }\r\n    createAddListDialogContainer(){\r\n        const addListDialogContainer = document.createElement('div');\r\n        addListDialogContainer.id = 'add-list-dialog-container';\r\n        addListDialogContainer.classList.add('flex','add-list-dialog-container');\r\n        return addListDialogContainer;\r\n    }\r\n    createAddListDialog(){\r\n        const addListDialog = document.createElement('div');\r\n        addListDialog.classList.add('flex','add-list-dialog');\r\n        return addListDialog;\r\n    }\r\n    createAddListDialogTop(){\r\n        const addListDialogTop = document.createElement('div');\r\n        addListDialogTop.classList.add('flex','add-list-dialog-top');\r\n        return addListDialogTop;\r\n    }\r\n    createAddListHeading(){\r\n        const addListHeading = document.createElement('h3');\r\n        addListHeading.innerText = 'Add List';\r\n        return addListHeading;\r\n    }\r\n    createAddListDialogClose(){\r\n        const addListDialogClose = document.createElement('button');\r\n        addListDialogClose.classList.add('add-list-dialog-close');\r\n        addListDialogClose.innerHTML = '<i class=\"fas fa-times\"></i>'\r\n        return addListDialogClose;\r\n    }\r\n    createAddListName(){\r\n        const addListName = document.createElement('div');\r\n        addListName.classList.add('flex','add-list-name');\r\n        const addListNameInput = document.createElement('input');\r\n        addListNameInput.type = 'text';\r\n        addListNameInput.placeholder = 'Shopping List';\r\n        addListName.appendChild(addListNameInput);\r\n        return addListName;\r\n    }\r\n    createAddListButtons(){\r\n        const addListButtons = document.createElement('div');\r\n        addListButtons.classList.add('flex','add-list-buttons');\r\n        const addListAddButton = document.createElement('button');\r\n        addListAddButton.classList.add('btn', 'btn-add');\r\n        addListAddButton.id = 'dialogAdd';\r\n        addListAddButton.innerText = 'Add';\r\n        const addListCancelButton = document.createElement('button');\r\n        addListCancelButton.classList.add('btn','btn-cancel');\r\n        addListCancelButton.id = 'dialogCancel';\r\n        addListCancelButton.innerText = 'Cancel';\r\n        addListButtons.appendChild(addListAddButton);\r\n        addListButtons.appendChild(addListCancelButton);\r\n        return addListButtons;\r\n    }\r\n}\n\n//# sourceURL=webpack://todolist/./src/AddListDialog.js?");

/***/ }),

/***/ "./src/List.js":
/*!*********************!*\
  !*** ./src/List.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": () => (/* binding */ List)\n/* harmony export */ });\nclass List {\r\n    constructor(name) {\r\n        this.name = name;\r\n    }\r\n    get listName(){\r\n        return this.name;\r\n    }\r\n    createListElement(){\r\n        const list = document.createElement('div');\r\n        list.classList.add('list','flex');\r\n        const listLeft = document.createElement('div');\r\n        listLeft.classList.add('list-left','flex');\r\n        const icon = document.createElement('i');\r\n        icon.classList.add('fas','fa-tasks');\r\n        const nameOfList = document.createElement('h3');\r\n        nameOfList.innerText = this.name;\r\n        const listRight = document.createElement('div');\r\n        listRight.classList.add('list-right','flex');\r\n        const deleteList = document.createElement('i');\r\n        deleteList.classList.add('fas', 'fa-times', 'delete-list');\r\n        deleteList.setAttribute('data-listName',this.listName);\r\n        listLeft.appendChild(icon);\r\n        listLeft.appendChild(nameOfList);\r\n        list.appendChild(listLeft);\r\n        listRight.appendChild(deleteList);\r\n        list.appendChild(listRight);\r\n        return list;\r\n    }\r\n}\n\n//# sourceURL=webpack://todolist/./src/List.js?");

/***/ }),

/***/ "./src/Storage.js":
/*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setItemStorage\": () => (/* binding */ setItemStorage),\n/* harmony export */   \"getItemStorage\": () => (/* binding */ getItemStorage),\n/* harmony export */   \"addValueToItemStorage\": () => (/* binding */ addValueToItemStorage),\n/* harmony export */   \"removeItemStorage\": () => (/* binding */ removeItemStorage)\n/* harmony export */ });\nfunction setItemStorage(itemKey,itemValue) {\r\n    localStorage.setItem(itemKey,JSON.stringify(itemValue));\r\n}\r\nfunction getItemStorage(itemKey) {\r\n    return JSON.parse(localStorage.getItem(itemKey));\r\n}\r\nfunction addValueToItemStorage(itemKey, val) {\r\n    let item = getItemStorage(itemKey);\r\n    item.push(val);\r\n    setItemStorage(itemKey,item);\r\n}\r\nfunction removeItemStorage(itemKey,val) {\r\n    let item = getItemStorage(itemKey);\r\n    let itemIndex = item.indexOf(val.toString());\r\n    item.splice(itemIndex,1);\r\n    setItemStorage(itemKey,item);\r\n}\n\n//# sourceURL=webpack://todolist/./src/Storage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ \"./src/List.js\");\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ \"./src/Storage.js\");\n/* harmony import */ var _AddListDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddListDialog */ \"./src/AddListDialog.js\");\n\r\n\r\n\r\n\r\n\r\nloadLists();\r\n\r\nfunction showAddListDialog() {\r\n    const dialogContainer = new _AddListDialog__WEBPACK_IMPORTED_MODULE_2__.AddListDialog();\r\n    const footer = document.querySelector('footer');\r\n    dialogContainer.classList.add('show');\r\n    document.body.insertBefore(dialogContainer,footer);\r\n    const dialogClose = document.querySelector('.add-list-dialog-close');\r\n    const dialogCancel = document.querySelector('#dialogCancel');\r\n    const dialogAdd = document.querySelector('#dialogAdd');\r\n    dialogClose.addEventListener('click',closeAddListDialog);\r\n    dialogCancel.addEventListener('click',closeAddListDialog);\r\n    dialogAdd.addEventListener('click',addList);\r\n}\r\nfunction closeAddListDialog() {\r\n    const dialogContainer = document.querySelector('.add-list-dialog-container');\r\n    dialogContainer.remove();\r\n}\r\nfunction addList() {\r\n    const lists = document.querySelector('.lists');\r\n    const listName = document.querySelector('.add-list-name input');\r\n    if (!checkListNames(listName.value)){\r\n        const list = new _List__WEBPACK_IMPORTED_MODULE_0__.List(listName.value);\r\n        (0,_Storage__WEBPACK_IMPORTED_MODULE_1__.addValueToItemStorage)('lists',list.listName);\r\n        lists.appendChild(list.createListElement());\r\n    }\r\n    addListEvents();\r\n}\r\nfunction loadLists() {\r\n    let listsArray = (0,_Storage__WEBPACK_IMPORTED_MODULE_1__.getItemStorage)('lists') || [];\r\n    const storage =  (0,_Storage__WEBPACK_IMPORTED_MODULE_1__.setItemStorage)('lists',listsArray);\r\n    const lists = document.querySelector('.lists');\r\n    const listItems = document.querySelectorAll('.list');\r\n    listItems.forEach(list=>{\r\n        list.remove();\r\n    })\r\n    listsArray.forEach(list=>{\r\n        const newList = new _List__WEBPACK_IMPORTED_MODULE_0__.List(list);\r\n        const newListElement = newList.createListElement();\r\n        lists.appendChild(newListElement);\r\n    });\r\n    addListEvents();\r\n}\r\nfunction checkListNames(val) {\r\n    let listsArray = (0,_Storage__WEBPACK_IMPORTED_MODULE_1__.getItemStorage)('lists') || [];\r\n    return listsArray.includes(val.trim().toLowerCase());\r\n}\r\nfunction removeList(e) {\r\n    (0,_Storage__WEBPACK_IMPORTED_MODULE_1__.removeItemStorage)('lists',e.target.dataset.listname);\r\n    loadLists();\r\n}\r\nfunction addListEvents() {\r\n    const addListButton = document.querySelector('#add-list-button');\r\n    addListButton.addEventListener('click',showAddListDialog);\r\n    const removeListButtons = document.querySelectorAll('.delete-list');\r\n    removeListButtons.forEach(button=>{\r\n        button.addEventListener('click',removeList);\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

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