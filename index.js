// Import the Task and ToDo classes
import { Task } from './Task.js';
import { ToDo } from './ToDo.js';

const PRIORITY = { LOW: 1, MEDIUM: 3, HIGH: 5, URGENT: 7 };

// Function to test if value is a positive integer 
const validInteger = value => /^[0-9]+$/.test(value);

// Validate priority - checks if input corresponds with one of the keys in PRIORITY obj
const validatePriority = priority => {
  if (validInteger(priority) && Object.values(PRIORITY).includes(priority)) {
    return priority;
  }
  return PRIORITY.LOW;
};

// Return date & time in the desired format
const todaysDate = () => {
  const date = new Date();
  return date.toLocaleString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).replace(',', '');
};

// Testing functions
const runTests = () => {
  console.log(validInteger('0.0')); // false
  console.log(validInteger(10)); // true
  console.log(validInteger('10')); // true
  console.log(validInteger(-1)); // false

  console.log(todaysDate()); // logs current date and time 

  console.log(validatePriority(1)); // 1
  console.log(validatePriority(3)); // 3
  console.log(validatePriority(5)); // 5
  console.log(validatePriority(7)); // 7
  console.log(validatePriority(10)); // 1
  console.log(validatePriority('10')); // 1
};

// Create tasks and add to todo list
const createTasks = () => {
  const tasks = [
    new Task('Fight an ostrich', PRIORITY['URGENT']),
    new Task('Walk the cat', PRIORITY['HIGH']),
    new Task('Buy milk', PRIORITY['MEDIUM']),
    new Task('Catch up with receptionist', PRIORITY['HIGH']),
    new Task('Eat fish', PRIORITY['LOW']),
    new Task('Get medical supplies', PRIORITY['LOW']),
    new Task('Watch anime', PRIORITY['URGENT']),
  ];

  const todoList = new ToDo();
  tasks.forEach(task => todoList.add(task));

  console.log(todoList.list().length); // logs 6
  console.log(todoList.list(5).length); // logs 2
  console.log(todoList.list(1)); // logs low priority tasks
  console.log(todoList.list(1)[0]); // first low priority task details
  console.log(todoList.list(1)[0][1]); // logs the title

  todoList.remove('Eat fish'); // remove low priority task
  console.log(todoList.list().length); // logs 5
  console.log(todoList.list(5).length); // logs remaining high priority tasks
  console.log(todoList.task('Get medical supplies')); // logs task details
};

// Running tests and creating tasks
runTests();
createTasks();


export { PRIORITY, validatePriority, todaysDate }; 