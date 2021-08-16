export function createTasksHeading() {
    const tasksHeading = document.createElement('h2');
    tasksHeading.classList.add('p-16');
    tasksHeading.innerText = 'Tasks';
    return tasksHeading;
}
