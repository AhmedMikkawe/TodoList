import {AddTaskScreen} from "./AddTaskScreen";
import {getItemStorage} from "./Storage";

export function renderAllToDos() {
    const todoArea = document.querySelector('.to-dos-area');
    while (todoArea.lastChild){
        todoArea.removeChild(todoArea.lastChild);
    }
    const todoAdd = new AddTaskScreen('allToDos');
    const heading = document.createElement('h2');
    heading.innerText = 'Add Task';
    heading.classList.add('p-16')
    todoArea.appendChild(heading);
    todoArea.appendChild(todoAdd);
    const todos = document.createElement('div');
    todos.classList.add('to-dos');
    todoArea.appendChild(todos);
    const toDosHeading = document.createElement('h2');
    toDosHeading.classList.add('p-16');
    toDosHeading.innerText = 'Tasks';
    todos.appendChild(toDosHeading);
    loadTasks();
}
export function loadTasks() {
    let tasks = getItemStorage('tasks') || [];
    const todoArea = document.querySelector('.to-dos-area');
    tasks.forEach(task=>{
        let taskElement = document.createElement('div');
        taskElement.setAttribute('data-listname',task.list);
        taskElement.classList.add('flex','task');
        let taskLeft = document.createElement('div');
        taskLeft.classList.add('flex','left');
        let icon = document.createElement('i');
        icon.classList.add('far', 'fa-circle', 'fa-2x');
        switch (task.priority) {
            case 'no':
                icon.classList.add('check');
                break;
            case 'low':
                icon.classList.add('low-priority');
                break;
            case 'medium':
                icon.classList.add('medium-priority');
                break;
            case 'high':
                icon.classList.add('high-priority');
                break;
        }
        let taskDescription = document.createElement('div');
        taskDescription.classList.add('to-do-description');
        taskDescription.contentEditable = 'true';
        taskDescription.innerText = task.name;

        let taskDate = document.createElement('div');
        taskDate.classList.add('date');
        taskDate.innerText = task.dueDate;

        let taskTime = document.createElement('div');
        taskTime.classList.add('time');
        taskTime.innerText = task.dueTime;

        let deleteTaskButton = document.createElement('button');
        deleteTaskButton.classList.add('delete-task-button');
        deleteTaskButton.innerHTML = '<i class="fas fa-times fa-2x delete-task"></i>';
        taskLeft.appendChild(icon);
        taskLeft.appendChild(taskDescription);
        taskElement.appendChild(taskLeft);
        taskElement.appendChild(taskDate);
        taskElement.appendChild(taskTime);
        taskElement.appendChild(deleteTaskButton);
        todoArea.appendChild(taskElement);
    });
}