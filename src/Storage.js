export function setItemStorage(itemKey,itemValue) {
    localStorage.setItem(itemKey,JSON.stringify(itemValue));
}
export function getItemStorage(itemKey) {
    return JSON.parse(localStorage.getItem(itemKey));
}
export function addValueToItemStorage(itemKey, val) {
    let item = getItemStorage(itemKey);
    item.push(val);
    setItemStorage(itemKey,item);
}
export function removeItemStorage(itemKey,val) {
    let item = getItemStorage(itemKey);
    let itemIndex = item.indexOf(val.toString());
    item.splice(itemIndex,1);
    setItemStorage(itemKey,item);
}