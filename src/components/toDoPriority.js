export function createToDoPriority() {
    const toDoPriority = document.createElement('select');
    const priorityOptions = ['no','low','medium','high'];
    toDoPriority.classList.add('to-do-priority');
    priorityOptions.forEach(priority=>{
        const option = document.createElement('option');
        option.innerText = priority.charAt(0).toUpperCase() + priority.slice(1);
        option.value = priority;
        toDoPriority.appendChild(option);
    });
    return toDoPriority;

}