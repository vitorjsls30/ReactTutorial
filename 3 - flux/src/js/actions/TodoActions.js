import dispatcher from '../dispatcher';

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text
  })
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id
  })
}

export function reloadTodos() {
  dispatcher.dispatch({type: "FETCH_TODOS"});
  setTimeout(() => {
      dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
        {
          id: 123456,
          text: 'Study ReactJs again',
          complete: false
        },
        {
          id: 456789,
          text: 'Study Guitar every Night again',
          complete: false
        }
      ]});
  }, 1000);
}
