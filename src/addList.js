export function showAddListDialog() {
    const addListDialog = document.querySelector('.add-list-dialog-container');
    addListDialog.classList.add('show');
    const close = document.querySelector('.add-list-dialog-close');
    const dialogCancel = document.querySelector('#dialogCancel');
    close.addEventListener('click',hideDialog);
    dialogCancel.addEventListener('click',hideDialog);
}

function hideDialog() {
    const dialog = document.querySelector('.add-list-dialog-container');
    dialog.classList.remove('show');
}