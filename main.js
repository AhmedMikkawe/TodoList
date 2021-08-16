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

/***/ "./src/allTodos.js":
/*!*************************!*\
  !*** ./src/allTodos.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAllToDos\": () => (/* binding */ createAllToDos)\n/* harmony export */ });\n/* harmony import */ var _components_heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/heading */ \"./src/components/heading.js\");\n/* harmony import */ var _components_toDoAdd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/toDoAdd */ \"./src/components/toDoAdd.js\");\n/* harmony import */ var _components_toDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/toDo */ \"./src/components/toDo.js\");\n/* harmony import */ var _components_toDoDescription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/toDoDescription */ \"./src/components/toDoDescription.js\");\n/* harmony import */ var _components_toDoPriority__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/toDoPriority */ \"./src/components/toDoPriority.js\");\n/* harmony import */ var _components_toDoDateTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/toDoDateTime */ \"./src/components/toDoDateTime.js\");\n/* harmony import */ var _components_toDoAddButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/toDoAddButtons */ \"./src/components/toDoAddButtons.js\");\n/* harmony import */ var _components_toDosTasks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/toDosTasks */ \"./src/components/toDosTasks.js\");\n/* harmony import */ var _components_tasksHeading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tasksHeading */ \"./src/components/tasksHeading.js\");\n/* harmony import */ var _components_task__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/task */ \"./src/components/task.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst toDosArea = document.querySelector('.to-dos-area');\r\nfunction createAllToDos() {\r\n    while (toDosArea.lastChild){\r\n        toDosArea.removeChild(toDosArea.lastChild);\r\n    }\r\n    const heading = (0,_components_heading__WEBPACK_IMPORTED_MODULE_0__.createHeading)();\r\n    toDosArea.appendChild(heading);\r\n\r\n    const toDoAdd = (0,_components_toDoAdd__WEBPACK_IMPORTED_MODULE_1__.createToDoAdd)();\r\n    toDosArea.appendChild(toDoAdd);\r\n\r\n    const toDo = (0,_components_toDo__WEBPACK_IMPORTED_MODULE_2__.createToDo)();\r\n    toDoAdd.appendChild(toDo);\r\n\r\n    const toDoDescription = (0,_components_toDoDescription__WEBPACK_IMPORTED_MODULE_3__.createToDoDescription)();\r\n    toDo.appendChild(toDoDescription);\r\n\r\n    const toDoPriority = (0,_components_toDoPriority__WEBPACK_IMPORTED_MODULE_4__.createToDoPriority)();\r\n    toDo.appendChild(toDoPriority);\r\n\r\n    const toDoDate = (0,_components_toDoDateTime__WEBPACK_IMPORTED_MODULE_5__.createToDoDate)();\r\n    toDo.appendChild(toDoDate);\r\n\r\n    const toDoTime = (0,_components_toDoDateTime__WEBPACK_IMPORTED_MODULE_5__.createToDoTime)();\r\n    toDo.appendChild(toDoTime);\r\n    const toDoAddButtons = (0,_components_toDoAddButtons__WEBPACK_IMPORTED_MODULE_6__.createToDoAddButtons)();\r\n    toDoAdd.appendChild(toDoAddButtons);\r\n\r\n    const toDosTasks = (0,_components_toDosTasks__WEBPACK_IMPORTED_MODULE_7__.createToDosTasks)();\r\n    const toDosTasksHeading = (0,_components_tasksHeading__WEBPACK_IMPORTED_MODULE_8__.createTasksHeading)();\r\n    toDosTasks.appendChild(toDosTasksHeading);\r\n    toDosArea.appendChild(toDosTasks);\r\n\r\n    const task = (0,_components_task__WEBPACK_IMPORTED_MODULE_9__.createTask)();\r\n    toDosTasks.appendChild(task);\r\n}\n\n//# sourceURL=webpack://todolist/./src/allTodos.js?");

/***/ }),

/***/ "./src/components/heading.js":
/*!***********************************!*\
  !*** ./src/components/heading.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeading\": () => (/* binding */ createHeading)\n/* harmony export */ });\nfunction createHeading() {\r\n    const heading = document.createElement('h2');\r\n    heading.innerText = 'Add Task';\r\n    heading.classList.add('p-16');\r\n    return heading;\r\n}\n\n//# sourceURL=webpack://todolist/./src/components/heading.js?");

/***/ }),

/***/ "./src/components/task.js":
/*!********************************!*\
  !*** ./src/components/task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTask\": () => (/* binding */ createTask)\n/* harmony export */ });\nfunction createTask() {\r\n    const task = document.createElement('div');\r\n    task.classList.add('flex','task');\r\n\r\n    const taskLeft = document.createElement('div');\r\n    taskLeft.classList.add('flex','left');\r\n\r\n    const taskCheck = document.createElement('i');\r\n    taskCheck.classList.add('far', 'fa-circle', 'fa-2x', 'check');\r\n    taskLeft.appendChild(taskCheck);\r\n\r\n    task.appendChild(taskLeft);\r\n    const taskDescription = document.createElement('div');\r\n    taskDescription.classList.add('to-do-description');\r\n    taskDescription.contentEditable = 'true';\r\n    taskDescription.innerText = 'task 1';\r\n    taskLeft.appendChild(taskDescription);\r\n\r\n    const date = document.createElement('div');\r\n    date.classList.add('date');\r\n    date.innerText = '15/08/2021';\r\n    task.appendChild(date);\r\n\r\n    const time = document.createElement('div');\r\n    time.classList.add('time');\r\n    time.innerText = '02 : 43 PM';\r\n    task.appendChild(time);\r\n\r\n    const deleteTaskButton = document.createElement('button');\r\n    deleteTaskButton.classList.add('delete-task-button');\r\n    task.appendChild(deleteTaskButton);\r\n\r\n    const deleteIcon = document.createElement('i');\r\n    deleteIcon.classList.add('fas', 'fa-times', 'fa-2x', 'delete-task');\r\n    deleteTaskButton.appendChild(deleteIcon);\r\n    return task;\r\n\r\n}\n\n//# sourceURL=webpack://todolist/./src/components/task.js?");

/***/ }),

/***/ "./src/components/tasksHeading.js":
/*!****************************************!*\
  !*** ./src/components/tasksHeading.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTasksHeading\": () => (/* binding */ createTasksHeading)\n/* harmony export */ });\nfunction createTasksHeading() {\r\n    const tasksHeading = document.createElement('h2');\r\n    tasksHeading.classList.add('p-16');\r\n    tasksHeading.innerText = 'Tasks';\r\n    return tasksHeading;\r\n}\r\n\n\n//# sourceURL=webpack://todolist/./src/components/tasksHeading.js?");

/***/ }),

/***/ "./src/components/toDo.js":
/*!********************************!*\
  !*** ./src/components/toDo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createToDo\": () => (/* binding */ createToDo)\n/* harmony export */ });\nfunction createToDo() {\r\n    const toDo = document.createElement('div');\r\n    toDo.classList.add('to-do','flex');\r\n    return toDo;\r\n}\n\n//# sourceURL=webpack://todolist/./src/components/toDo.js?");

/***/ }),

/***/ "./src/components/toDoAdd.js":
/*!***********************************!*\
  !*** ./src/components/toDoAdd.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createToDoAdd\": () => (/* binding */ createToDoAdd)\n/* harmony export */ });\nfunction createToDoAdd() {\r\n    const toDoAdd = document.createElement('div');\r\n    toDoAdd.classList.add('to-do-add','flex');\r\n    return toDoAdd;\r\n}\r\n\n\n//# sourceURL=webpack://todolist/./src/components/toDoAdd.js?");

/***/ }),

/***/ "./src/components/toDoAddButtons.js":
/*!******************************************!*\
  !*** ./src/components/toDoAddButtons.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createToDoAddButtons\": () => (/* binding */ createToDoAddButtons)\n/* harmony export */ });\nfunction createToDoAddButtons() {\r\n    const toDoAddButtons = document.createElement('div');\r\n    const toDoAddAddButton = document.createElement('button');\r\n    const toDoAddCancelButton = document.createElement('button');\r\n    toDoAddAddButton.innerText = 'Add';\r\n    toDoAddCancelButton.innerText = 'Cancel';\r\n    toDoAddAddButton.classList.add('btn','btn-add');\r\n    toDoAddCancelButton.classList.add('btn','btn-cancel');\r\n    toDoAddButtons.appendChild(toDoAddAddButton);\r\n    toDoAddButtons.appendChild(toDoAddCancelButton);\r\n    toDoAddButtons.classList.add('flex','buttons');\r\n    return toDoAddButtons;\r\n}\n\n//# sourceURL=webpack://todolist/./src/components/toDoAddButtons.js?");

/***/ }),

/***/ "./src/components/toDoDateTime.js":
/*!****************************************!*\
  !*** ./src/components/toDoDateTime.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createToDoDate\": () => (/* binding */ createToDoDate),\n/* harmony export */   \"createToDoTime\": () => (/* binding */ createToDoTime)\n/* harmony export */ });\nfunction createToDoDate() {\r\n    const toDoDate = document.createElement('input');\r\n    toDoDate.type = 'date';\r\n    toDoDate.classList.add('to-do-date');\r\n    return toDoDate;\r\n}\r\nfunction createToDoTime() {\r\n    const toDoTime = document.createElement('input');\r\n    toDoTime.type = 'time';\r\n    toDoTime.classList.add('to-do-time');\r\n    return toDoTime;\r\n}\n\n//# sourceURL=webpack://todolist/./src/components/toDoDateTime.js?");

/***/ }),

/***/ "./src/components/toDoDescription.js":
/*!*******************************************!*\
  !*** ./src/components/toDoDescription.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createToDoDescription\": () => (/* binding */ createToDoDescription)\n/* harmony export */ });\nfunction createToDoDescription() {\r\n    const toDoDescription = document.createElement('input');\r\n    toDoDescription.type = 'text';\r\n    toDoDescription.classList.add('to-do-description');\r\n    toDoDescription.placeholder = 'todo...';\r\n    return toDoDescription;\r\n}\r\n\n\n//# sourceURL=webpack://todolist/./src/components/toDoDescription.js?");

/***/ }),

/***/ "./src/components/toDoPriority.js":
/*!****************************************!*\
  !*** ./src/components/toDoPriority.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createToDoPriority\": () => (/* binding */ createToDoPriority)\n/* harmony export */ });\nfunction createToDoPriority() {\r\n    const toDoPriority = document.createElement('select');\r\n    const priorityOptions = ['no','low','medium','high'];\r\n    toDoPriority.classList.add('to-do-priority');\r\n    priorityOptions.forEach(priority=>{\r\n        const option = document.createElement('option');\r\n        option.innerText = priority.charAt(0).toUpperCase() + priority.slice(1);\r\n        option.value = priority;\r\n        toDoPriority.appendChild(option);\r\n    });\r\n    return toDoPriority;\r\n\r\n}\n\n//# sourceURL=webpack://todolist/./src/components/toDoPriority.js?");

/***/ }),

/***/ "./src/components/toDosTasks.js":
/*!**************************************!*\
  !*** ./src/components/toDosTasks.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createToDosTasks\": () => (/* binding */ createToDosTasks)\n/* harmony export */ });\nfunction createToDosTasks() {\r\n    const toDosTasks = document.createElement('div');\r\n    toDosTasks.classList.add('to-dos')\r\n    return toDosTasks;\r\n}\n\n//# sourceURL=webpack://todolist/./src/components/toDosTasks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _allTodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allTodos */ \"./src/allTodos.js\");\n\r\n\r\ndocument.onload = _allTodos__WEBPACK_IMPORTED_MODULE_0__.createAllToDos;\r\nconst allToDos = document.querySelector('.all-todos');\r\nallToDos.addEventListener('click',_allTodos__WEBPACK_IMPORTED_MODULE_0__.createAllToDos,);\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

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