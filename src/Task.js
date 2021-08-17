export class Task{
    constructor(name,priority,dueDate,dueTime,list) {
        this.name = name;
        this.priority = priority;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.list = list;
    }
    get taskName(){
        return this.name;
    }
    get taskPriority(){
        return this.priority;
    }
    get taskDueDate(){
        return this.dueDate;
    }
    get taskDueTime(){
        return this.dueTime;
    }
    get taskList(){
        return this.list;
    }
}