import { validatePriority } from './index.js';


export class ToDo {
  constructor() {
    this.tasks = [];
  }
  // use add method to add a new task to the tasks array
  add(newTask) {
    this.tasks.push(newTask);
    return this.tasks.length;
  }

  remove(title) {
    // utilise array filter method to refactor code for efficiency
    const initialLength = this.tasks.length;
    this.tasks = this.tasks.filter(task => task.title !== title);

    // check if a task was removed by comparing lengths
    return this.tasks.length < initialLength;
  }

  list(priority = 0) {
    // filter to get only tasks with given priority, or all if priority == 0;
    return (priority === 0 ? this.tasks.map(task => [task.added, task.title, task.priority])
      : this.tasks.filter(task => task.priority === validatePriority(priority)))
      .map(task => [task.added, task.title, task.priority]);
  }

  task(title) {
    // Refactored to use the find method for efficiency
    const task = this.tasks.find(task => task.title === title);
    if (task) {
      return task;
    }
    // Throw an error if no tasks match the argument
    throw new Error(`Task '${title}' Not Found`);
  }
}