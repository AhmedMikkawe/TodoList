import {List} from "./List";
import {addValueToItemStorage, getItemStorage, removeItemStorage, setItemStorage} from "./Storage";
import {AddListDialog} from "./AddListDialog";


loadLists();

function showAddListDialog() {
    const dialogContainer = new AddListDialog();
    const footer = document.querySelector('footer');
    dialogContainer.classList.add('show');
    document.body.insertBefore(dialogContainer,footer);
    const dialogClose = document.querySelector('.add-list-dialog-close');
    const dialogCancel = document.querySelector('#dialogCancel');
    const dialogAdd = document.querySelector('#dialogAdd');
    dialogClose.addEventListener('click',closeAddListDialog);
    dialogCancel.addEventListener('click',closeAddListDialog);
    dialogAdd.addEventListener('click',addList);
}
function closeAddListDialog() {
    const dialogContainer = document.querySelector('.add-list-dialog-container');
    dialogContainer.remove();
}
function addList() {
    const lists = document.querySelector('.lists');
    const listName = document.querySelector('.add-list-name input');
    if (!checkListNames(listName.value)){
        const list = new List(listName.value);
        addValueToItemStorage('lists',list.listName);
        lists.appendChild(list.createListElement());
    }
    addListEvents();
}
function loadLists() {
    let listsArray = getItemStorage('lists') || [];
    const storage =  setItemStorage('lists',listsArray);
    const lists = document.querySelector('.lists');
    const listItems = document.querySelectorAll('.list');
    listItems.forEach(list=>{
        list.remove();
    })
    listsArray.forEach(list=>{
        const newList = new List(list);
        const newListElement = newList.createListElement();
        lists.appendChild(newListElement);
    });
    addListEvents();
}
function checkListNames(val) {
    let listsArray = getItemStorage('lists') || [];
    return listsArray.includes(val.trim().toLowerCase());
}
function removeList(e) {
    removeItemStorage('lists',e.target.dataset.listname);
    loadLists();
}
function addListEvents() {
    const addListButton = document.querySelector('#add-list-button');
    addListButton.addEventListener('click',showAddListDialog);
    const removeListButtons = document.querySelectorAll('.delete-list');
    removeListButtons.forEach(button=>{
        button.addEventListener('click',removeList);
    })
}
