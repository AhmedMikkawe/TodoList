export class List {
    constructor(name) {
        this.name = name;
    }
    get listName(){
        return this.name;
    }
    createListElement(){
        const list = document.createElement('div');
        list.classList.add('list','flex');
        const listLeft = document.createElement('div');
        listLeft.classList.add('list-left','flex');
        const icon = document.createElement('i');
        icon.classList.add('fas','fa-tasks');
        const nameOfList = document.createElement('h3');
        nameOfList.innerText = this.name;
        const listRight = document.createElement('div');
        listRight.classList.add('list-right','flex');
        const deleteList = document.createElement('i');
        deleteList.classList.add('fas', 'fa-times', 'delete-list');
        listLeft.appendChild(icon);
        listLeft.appendChild(nameOfList);
        list.appendChild(listLeft);
        listRight.appendChild(deleteList);
        list.appendChild(listRight);
        return list;
    }
}