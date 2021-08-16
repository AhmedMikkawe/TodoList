import {createAllToDos} from "./allTodos";

document.onload = createAllToDos();
const allToDos = document.querySelector('.all-todos');
allToDos.addEventListener('click',createAllToDos,);
