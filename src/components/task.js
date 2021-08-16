export function createTask() {
    const task = document.createElement('div');
    task.classList.add('flex','task');

    const taskLeft = document.createElement('div');
    taskLeft.classList.add('flex','left');

    const taskCheck = document.createElement('i');
    taskCheck.classList.add('far', 'fa-circle', 'fa-2x', 'check');
    taskLeft.appendChild(taskCheck);

    task.appendChild(taskLeft);
    const taskDescription = document.createElement('div');
    taskDescription.classList.add('to-do-description');
    taskDescription.contentEditable = 'true';
    taskDescription.innerText = 'task 1';
    taskLeft.appendChild(taskDescription);

    const date = document.createElement('div');
    date.classList.add('date');
    date.innerText = '15/08/2021';
    task.appendChild(date);

    const time = document.createElement('div');
    time.classList.add('time');
    time.innerText = '02 : 43 PM';
    task.appendChild(time);

    const deleteTaskButton = document.createElement('button');
    deleteTaskButton.classList.add('delete-task-button');
    task.appendChild(deleteTaskButton);

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fas', 'fa-times', 'fa-2x', 'delete-task');
    deleteTaskButton.appendChild(deleteIcon);
    return task;

}