export class AddListDialog {
    constructor() {
        let addListDialogContainer = this.createAddListDialogContainer();
        let addListDialog = this.createAddListDialog();
        addListDialogContainer.appendChild(addListDialog);
        let addListDialogTop = this.createAddListDialogTop();
        addListDialog.appendChild(addListDialogTop);
        let addListHeading = this.createAddListHeading();
        addListDialogTop.appendChild(addListHeading);
        let addListDialogClose = this.createAddListDialogClose();
        addListDialogTop.appendChild(addListDialogClose);
        let addListName = this.createAddListName();
        addListDialog.appendChild(addListName);
        let addListButtons = this.createAddListButtons();
        addListDialog.appendChild(addListButtons);
        return addListDialogContainer;
    }
    createAddListDialogContainer(){
        const addListDialogContainer = document.createElement('div');
        addListDialogContainer.id = 'add-list-dialog-container';
        addListDialogContainer.classList.add('flex','add-list-dialog-container');
        return addListDialogContainer;
    }
    createAddListDialog(){
        const addListDialog = document.createElement('div');
        addListDialog.classList.add('flex','add-list-dialog');
        return addListDialog;
    }
    createAddListDialogTop(){
        const addListDialogTop = document.createElement('div');
        addListDialogTop.classList.add('flex','add-list-dialog-top');
        return addListDialogTop;
    }
    createAddListHeading(){
        const addListHeading = document.createElement('h3');
        addListHeading.innerText = 'Add List';
        return addListHeading;
    }
    createAddListDialogClose(){
        const addListDialogClose = document.createElement('button');
        addListDialogClose.classList.add('add-list-dialog-close');
        addListDialogClose.innerHTML = '<i class="fas fa-times"></i>'
        return addListDialogClose;
    }
    createAddListName(){
        const addListName = document.createElement('div');
        addListName.classList.add('flex','add-list-name');
        const addListNameInput = document.createElement('input');
        addListNameInput.type = 'text';
        addListNameInput.placeholder = 'Shopping List';
        addListName.appendChild(addListNameInput);
        return addListName;
    }
    createAddListButtons(){
        const addListButtons = document.createElement('div');
        addListButtons.classList.add('flex','add-list-buttons');
        const addListAddButton = document.createElement('button');
        addListAddButton.classList.add('btn', 'btn-add');
        addListAddButton.id = 'dialogAdd';
        addListAddButton.innerText = 'Add';
        const addListCancelButton = document.createElement('button');
        addListCancelButton.classList.add('btn','btn-cancel');
        addListCancelButton.id = 'dialogCancel';
        addListCancelButton.innerText = 'Cancel';
        addListButtons.appendChild(addListAddButton);
        addListButtons.appendChild(addListCancelButton);
        return addListButtons;
    }
}