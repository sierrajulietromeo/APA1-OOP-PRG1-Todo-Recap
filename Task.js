import { todaysDate, validatePriority } from './index.js';

export class Task {
  #title;
  #priority;
  #added;

  constructor(title, priority) {
    this.#title = title;
    this.#priority = validatePriority(priority);
    this.#added = todaysDate();
  }

  get title() {
    return this.#title;
  }

  get priority() {
    return this.#priority;
  }

  set priority(priority) {
    this.#priority = validatePriority(priority);
  }

  get added() {
    return this.#added;
  }
}