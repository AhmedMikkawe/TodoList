export class AddTaskScreen {
    constructor(list) {
        let priorities = ['no','low','medium','high'];
        let addTask = document.createElement('div');
        addTask.setAttribute('data-listname',list);
        addTask.classList.add('to-do-add','flex');
        let task = document.createElement('div');
        task.classList.add('to-do','flex');
        let taskDescription = document.createElement('input');
        taskDescription.type = 'text';
        taskDescription.classList.add('to-do-description');
        taskDescription.placeholder = 'todo...';
        taskDescription.id = 'taskDescription';

        let taskPriority = document.createElement('select');
        taskPriority.classList.add('to-do-priority');
        priorities.forEach(priority=>{
            const priorityElement = document.createElement('option');
            priorityElement.value = priority;
            priorityElement.innerText = priority.charAt(0).toUpperCase() + priority.slice(1);
            taskPriority.appendChild(priorityElement);
        })
        taskPriority.id = 'taskPriority';
        let taskDueDate = document.createElement('input');
        taskDueDate.classList.add('to-do-date');
        taskDueDate.type = 'date';
        taskDueDate.id = 'taskDueDate';
        let taskDueTime = document.createElement('input');
        taskDueTime.classList.add('to-do-time');
        taskDueTime.type = 'time';
        taskDueTime.id = 'taskDueTime';

        let taskButtons = document.createElement('div');
        taskButtons.classList.add('flex','buttons');
        let addButton = document.createElement('button');
        addButton.id = 'addTask';
        addButton.classList.add('btn', 'btn-add');
        addButton.innerText = 'Add';
        let cancelButton = document.createElement('button');
        cancelButton.id = 'cancelTask';
        cancelButton.classList.add('btn','btn-cancel');
        cancelButton.innerText = 'Cancel';

        taskButtons.appendChild(addButton);
        taskButtons.appendChild(cancelButton);
        addTask.appendChild(task);
        addTask.appendChild(taskButtons);

        task.appendChild(taskDescription);
        task.appendChild(taskPriority);
        task.appendChild(taskDueDate);
        task.appendChild(taskDueTime)
        return addTask;
    }
}