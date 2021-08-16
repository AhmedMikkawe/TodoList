export function createToDoAddButtons() {
    const toDoAddButtons = document.createElement('div');
    const toDoAddAddButton = document.createElement('button');
    const toDoAddCancelButton = document.createElement('button');
    toDoAddAddButton.innerText = 'Add';
    toDoAddCancelButton.innerText = 'Cancel';
    toDoAddAddButton.classList.add('btn','btn-add');
    toDoAddCancelButton.classList.add('btn','btn-cancel');
    toDoAddButtons.appendChild(toDoAddAddButton);
    toDoAddButtons.appendChild(toDoAddCancelButton);
    toDoAddButtons.classList.add('flex','buttons');
    return toDoAddButtons;
}