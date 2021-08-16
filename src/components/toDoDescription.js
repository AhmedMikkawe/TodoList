export function createToDoDescription() {
    const toDoDescription = document.createElement('input');
    toDoDescription.type = 'text';
    toDoDescription.classList.add('to-do-description');
    toDoDescription.placeholder = 'todo...';
    return toDoDescription;
}
