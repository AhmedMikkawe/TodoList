import {List} from "./List";
import {Storage} from "./Storage";

const lists = document.querySelector('.lists');
const list1 = new List('Shopping');
const list2 = new List("Personal");
const listsArray = [list1.listName,list2.listName];
const storage = new Storage('lists',listsArray);
lists.appendChild(list1.createListElement());
lists.appendChild(list2.createListElement());