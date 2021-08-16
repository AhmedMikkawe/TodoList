export function createToDoDate() {
    const toDoDate = document.createElement('input');
    toDoDate.type = 'date';
    toDoDate.classList.add('to-do-date');
    return toDoDate;
}
export function createToDoTime() {
    const toDoTime = document.createElement('input');
    toDoTime.type = 'time';
    toDoTime.classList.add('to-do-time');
    return toDoTime;
}