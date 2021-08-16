import {createAllToDos} from "./allTodos";
import {showAddListDialog} from "./addList";

document.onload = createAllToDos();
const allToDos = document.querySelector('.all-todos');
const addList = document.querySelector('.add-list');
allToDos.addEventListener('click',createAllToDos);
addList.addEventListener('click',showAddListDialog);
