import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';

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

  handleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
      }
      case "FETCH_TODOS": {
        console.log('RECEIVED FETCH_TODOS');
      }
      case "RECEIVE_TODOS" : {
        this.todos = action.todos;
        this.emit('change');
      }
    }
  }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;

export default todoStore;
