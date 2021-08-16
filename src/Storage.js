export class Storage {
    constructor(itemKey,itemValue) {
        this.itemKey = itemKey;
        this.itemValue = itemValue;
        localStorage.setItem(itemKey,JSON.stringify(this.itemValue));
    }
    get value(){
        return JSON.parse(localStorage.getItem(this.itemKey));
    }
    addValue(val){
        this.itemValue.push(val);
    }
}