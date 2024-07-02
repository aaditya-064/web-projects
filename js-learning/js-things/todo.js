class Todo {
  constructor(task, completed = false) {
    this.task = task;
    this.completed = completed;
  }

  markComplete() {
    this.completed = true;
  }

  display() {
    console.log(`${this.task} - ${this.completed ? "Completed" : "Pending"}`);
  }
}

const todos = [];

function addTodoTask(task) {
  const todo = new Todo(task);
  todos.push(todo);
}

function displayTodos() {
  todos.forEach((todo) => todo.display());
}

addTodoTask("Learn JavaScript");
addTodoTask("Build a project");
displayTodos();
// Output:
// Learn JavaScript - Pending
// Build a project - Pending

todos[0].markComplete();
displayTodos();
// Output:
// Learn JavaScript - Completed
// Build a project - Pending
