import {createHeading} from "./components/heading";
import {createToDoAdd} from "./components/toDoAdd";
import {createToDo} from "./components/toDo";
import {createToDoDescription} from "./components/toDoDescription";
import {createToDoPriority} from "./components/toDoPriority";
import {createToDoTime,createToDoDate} from "./components/toDoDateTime";
import {createToDoAddButtons} from "./components/toDoAddButtons";
import {createToDosTasks} from "./components/toDosTasks";
import {createTasksHeading} from "./components/tasksHeading";
import {createTask} from "./components/task";

const toDosArea = document.querySelector('.to-dos-area');
export function createAllToDos() {
    while (toDosArea.lastChild){
        toDosArea.removeChild(toDosArea.lastChild);
    }
    const heading = createHeading();
    toDosArea.appendChild(heading);

    const toDoAdd = createToDoAdd();
    toDosArea.appendChild(toDoAdd);

    const toDo = createToDo();
    toDoAdd.appendChild(toDo);

    const toDoDescription = createToDoDescription();
    toDo.appendChild(toDoDescription);

    const toDoPriority = createToDoPriority();
    toDo.appendChild(toDoPriority);

    const toDoDate = createToDoDate();
    toDo.appendChild(toDoDate);

    const toDoTime = createToDoTime();
    toDo.appendChild(toDoTime);
    const toDoAddButtons = createToDoAddButtons();
    toDoAdd.appendChild(toDoAddButtons);

    const toDosTasks = createToDosTasks();
    const toDosTasksHeading = createTasksHeading();
    toDosTasks.appendChild(toDosTasksHeading);
    toDosArea.appendChild(toDosTasks);

    const task = createTask();
    toDosTasks.appendChild(task);
}