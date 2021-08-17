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

/***/ "./src/AddTaskScreen.js":
/*!******************************!*\
  !*** ./src/AddTaskScreen.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddTaskScreen\": () => (/* binding */ AddTaskScreen)\n/* harmony export */ });\nclass AddTaskScreen {\r\n    constructor(list) {\r\n        let priorities = ['no','low','medium','high'];\r\n        let addTask = document.createElement('div');\r\n        addTask.setAttribute('data-listname',list);\r\n        addTask.classList.add('to-do-add','flex');\r\n        let task = document.createElement('div');\r\n        task.classList.add('to-do','flex');\r\n        let taskDescription = document.createElement('input');\r\n        taskDescription.type = 'text';\r\n        taskDescription.classList.add('to-do-description');\r\n        taskDescription.placeholder = 'todo...';\r\n        taskDescription.id = 'taskDescription';\r\n\r\n        let taskPriority = document.createElement('select');\r\n        taskPriority.classList.add('to-do-priority');\r\n        priorities.forEach(priority=>{\r\n            const priorityElement = document.createElement('option');\r\n            priorityElement.value = priority;\r\n            priorityElement.innerText = priority.charAt(0).toUpperCase() + priority.slice(1);\r\n            taskPriority.appendChild(priorityElement);\r\n        })\r\n        taskPriority.id = 'taskPriority';\r\n        let taskDueDate = document.createElement('input');\r\n        taskDueDate.classList.add('to-do-date');\r\n        taskDueDate.type = 'date';\r\n        taskDueDate.id = 'taskDueDate';\r\n        let taskDueTime = document.createElement('input');\r\n        taskDueTime.classList.add('to-do-time');\r\n        taskDueTime.type = 'time';\r\n        taskDueTime.id = 'taskDueTime';\r\n\r\n        let taskButtons = document.createElement('div');\r\n        taskButtons.classList.add('flex','buttons');\r\n        let addButton = document.createElement('button');\r\n        addButton.id = 'addTask';\r\n        addButton.classList.add('btn', 'btn-add');\r\n        addButton.innerText = 'Add';\r\n        let cancelButton = document.createElement('button');\r\n        cancelButton.id = 'cancelTask';\r\n        cancelButton.classList.add('btn','btn-cancel');\r\n        cancelButton.innerText = 'Cancel';\r\n\r\n        taskButtons.appendChild(addButton);\r\n        taskButtons.appendChild(cancelButton);\r\n        addTask.appendChild(task);\r\n        addTask.appendChild(taskButtons);\r\n\r\n        task.appendChild(taskDescription);\r\n        task.appendChild(taskPriority);\r\n        task.appendChild(taskDueDate);\r\n        task.appendChild(taskDueTime)\r\n        return addTask;\r\n    }\r\n}\n\n//# sourceURL=webpack://todolist/./src/AddTaskScreen.js?");

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

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task{\r\n    constructor(name,priority,dueDate,dueTime,list) {\r\n        this.name = name;\r\n        this.priority = priority;\r\n        this.dueDate = dueDate;\r\n        this.dueTime = dueTime;\r\n        this.list = list;\r\n    }\r\n    get taskName(){\r\n        return this.name;\r\n    }\r\n    get taskPriority(){\r\n        return this.priority;\r\n    }\r\n    get taskDueDate(){\r\n        return this.dueDate;\r\n    }\r\n    get taskDueTime(){\r\n        return this.dueTime;\r\n    }\r\n    get taskList(){\r\n        return this.list;\r\n    }\r\n}\n\n//# sourceURL=webpack://todolist/./src/Task.js?");

/***/ }),

/***/ "./src/allToDos.js":
/*!*************************!*\
  !*** ./src/allToDos.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderAllToDos\": () => (/* binding */ renderAllToDos),\n/* harmony export */   \"loadTasks\": () => (/* binding */ loadTasks)\n/* harmony export */ });\n/* harmony import */ var _AddTaskScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddTaskScreen */ \"./src/AddTaskScreen.js\");\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ \"./src/Storage.js\");\n\r\n\r\n\r\nfunction renderAllToDos() {\r\n    const todoArea = document.querySelector('.to-dos-area');\r\n    while (todoArea.lastChild){\r\n        todoArea.removeChild(todoArea.lastChild);\r\n    }\r\n    const todoAdd = new _AddTaskScreen__WEBPACK_IMPORTED_MODULE_0__.AddTaskScreen('allToDos');\r\n    const heading = document.createElement('h2');\r\n    heading.innerText = 'Add Task';\r\n    heading.classList.add('p-16')\r\n    todoArea.appendChild(heading);\r\n    todoArea.appendChild(todoAdd);\r\n    const todos = document.createElement('div');\r\n    todos.classList.add('to-dos');\r\n    todoArea.appendChild(todos);\r\n    const toDosHeading = document.createElement('h2');\r\n    toDosHeading.classList.add('p-16');\r\n    toDosHeading.innerText = 'Tasks';\r\n    todos.appendChild(toDosHeading);\r\n    loadTasks();\r\n}\r\nfunction loadTasks() {\r\n    let tasks = (0,_Storage__WEBPACK_IMPORTED_MODULE_1__.getItemStorage)('tasks') || [];\r\n    const todoArea = document.querySelector('.to-dos-area');\r\n    tasks.forEach(task=>{\r\n        let taskElement = document.createElement('div');\r\n        taskElement.setAttribute('data-listname',task.list);\r\n        taskElement.classList.add('flex','task');\r\n        let taskLeft = document.createElement('div');\r\n        taskLeft.classList.add('flex','left');\r\n        let icon = document.createElement('i');\r\n        icon.classList.add('far', 'fa-circle', 'fa-2x');\r\n        switch (task.priority) {\r\n            case 'no':\r\n                icon.classList.add('check');\r\n                break;\r\n            case 'low':\r\n                icon.classList.add('low-priority');\r\n                break;\r\n            case 'medium':\r\n                icon.classList.add('medium-priority');\r\n                break;\r\n            case 'high':\r\n                icon.classList.add('high-priority');\r\n                break;\r\n        }\r\n        let taskDescription = document.createElement('div');\r\n        taskDescription.classList.add('to-do-description');\r\n        taskDescription.contentEditable = 'true';\r\n        taskDescription.innerText = task.name;\r\n\r\n        let taskDate = document.createElement('div');\r\n        taskDate.classList.add('date');\r\n        taskDate.innerText = task.dueDate;\r\n\r\n        let taskTime = document.createElement('div');\r\n        taskTime.classList.add('time');\r\n        taskTime.innerText = task.dueTime;\r\n\r\n        let deleteTaskButton = document.createElement('button');\r\n        deleteTaskButton.classList.add('delete-task-button');\r\n        deleteTaskButton.innerHTML = '<i class=\"fas fa-times fa-2x delete-task\"></i>';\r\n        taskLeft.appendChild(icon);\r\n        taskLeft.appendChild(taskDescription);\r\n        taskElement.appendChild(taskLeft);\r\n        taskElement.appendChild(taskDate);\r\n        taskElement.appendChild(taskTime);\r\n        taskElement.appendChild(deleteTaskButton);\r\n        todoArea.appendChild(taskElement);\r\n    });\r\n}\n\n//# sourceURL=webpack://todolist/./src/allToDos.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ \"./src/List.js\");\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ \"./src/Storage.js\");\n/* harmony import */ var _AddListDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddListDialog */ \"./src/AddListDialog.js\");\n/* harmony import */ var _allToDos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allToDos */ \"./src/allToDos.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nloadLists();\r\naddSectionEvents();\r\naddTaskScreenEvents();\r\nfunction showAddListDialog() {\r\n    const dialogContainer = new _AddListDialog__WEBPACK_IMPORTED_MODULE_2__.AddListDialog();\r\n    const footer = document.querySelector('footer');\r\n    dialogContainer.classList.add('show');\r\n    document.body.insertBefore(dialogContainer,footer);\r\n    const dialogClose = document.querySelector('.add-list-dialog-close');\r\n    const dialogCancel = document.querySelector('#dialogCancel');\r\n    const dialogAdd = document.querySelector('#dialogAdd');\r\n    dialogClose.addEventListener('click',closeAddListDialog);\r\n    dialogCancel.addEventListener('click',closeAddListDialog);\r\n    dialogAdd.addEventListener('click',addList);\r\n}\r\nfunction closeAddListDialog() {\r\n    const dialogContainer = document.querySelector('.add-list-dialog-container');\r\n    dialogContainer.remove();\r\n}\r\nfunction addList() {\r\n    const lists = document.querySelector('.lists');\r\n    const listName = document.querySelector('.add-list-name input');\r\n    if (!checkListNames(listName.value)){\r\n        const list = new _List__WEBPACK_IMPORTED_MODULE_0__.List(listName.value);\r\n        (0,_Storage__WEBPACK_IMPORTED_MODULE_1__.addValueToItemStorage)('lists',list.listName);\r\n        lists.appendChild(list.createListElement());\r\n    }\r\n    addListEvents();\r\n}\r\nfunction loadLists() {\r\n    let listsArray = (0,_Storage__WEBPACK_IMPORTED_MODULE_1__.getItemStorage)('lists') || [];\r\n    const storage =  (0,_Storage__WEBPACK_IMPORTED_MODULE_1__.setItemStorage)('lists',listsArray);\r\n    const lists = document.querySelector('.lists');\r\n    const listItems = document.querySelectorAll('.list');\r\n    listItems.forEach(list=>{\r\n        list.remove();\r\n    })\r\n    listsArray.forEach(list=>{\r\n        const newList = new _List__WEBPACK_IMPORTED_MODULE_0__.List(list);\r\n        const newListElement = newList.createListElement();\r\n        lists.appendChild(newListElement);\r\n    });\r\n    addListEvents();\r\n}\r\nfunction checkListNames(val) {\r\n    let listsArray = (0,_Storage__WEBPACK_IMPORTED_MODULE_1__.getItemStorage)('lists') || [];\r\n    return listsArray.includes(val.trim().toLowerCase());\r\n}\r\nfunction removeList(e) {\r\n    (0,_Storage__WEBPACK_IMPORTED_MODULE_1__.removeItemStorage)('lists',e.target.dataset.listname);\r\n    loadLists();\r\n}\r\nfunction addListEvents() {\r\n    const addListButton = document.querySelector('#add-list-button');\r\n    addListButton.addEventListener('click',showAddListDialog);\r\n    const removeListButtons = document.querySelectorAll('.delete-list');\r\n    removeListButtons.forEach(button=>{\r\n        button.addEventListener('click',removeList);\r\n    })\r\n}\r\nfunction addSectionEvents() {\r\n    const allToDosButton = document.querySelector('.all-todos');\r\n    allToDosButton.addEventListener('click',_allToDos__WEBPACK_IMPORTED_MODULE_3__.renderAllToDos);\r\n    allToDosButton.click();\r\n}\r\n\r\nfunction addTaskScreenEvents() {\r\n    const addButton = document.querySelector('#addTask');\r\n    addButton.addEventListener('click',addTask);\r\n}\r\nfunction addTask() {\r\n    let tasks = (0,_Storage__WEBPACK_IMPORTED_MODULE_1__.getItemStorage)('tasks');\r\n    const taskDescripton = document.querySelector('#taskDescription');\r\n    const taskPriority = document.querySelector('#taskPriority');\r\n    const taskDueDate = document.querySelector('#taskDueDate');\r\n    const taskDueTime = document.querySelector('#taskDueTime');\r\n    console.log(taskDueTime.value);\r\n    const taskList = document.querySelector('.to-do-add');\r\n    let task = new _Task__WEBPACK_IMPORTED_MODULE_4__.Task(taskDescripton.value,taskPriority.value,\r\n        taskDueDate.value,taskDueTime.value,taskList.getAttribute('data-listname'));\r\n    if (tasks == null){\r\n        let newTaskArr = [];\r\n        (0,_Storage__WEBPACK_IMPORTED_MODULE_1__.setItemStorage)('tasks',newTaskArr);\r\n    }\r\n        (0,_Storage__WEBPACK_IMPORTED_MODULE_1__.addValueToItemStorage)('tasks',task);\r\n    (0,_allToDos__WEBPACK_IMPORTED_MODULE_3__.renderAllToDos)();\r\n    addTaskScreenEvents();\r\n}\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

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