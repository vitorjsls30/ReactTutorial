import {EventEmitter} from 'events';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 123,
        text: 'Study ReactJs',
        complete: false
      },
      {
        id: 456,
        text: 'Study Guitar every Night',
        complete: false
      }
    ];
  }

  createTodo(text) {
    const id = Date.now();
    this.todos.push({
      id,
      text,
      complete: false
    });
    this.emit('change');
  }

  getAll() {
    return this.todos;
  }
}

const todoStore = new TodoStore;
window.TodoStore = todoStore;

export default todoStore;
