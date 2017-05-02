import React from 'react';
import Todo from '../components/Todo';

import TodoStore from '../stores/TodoStore';

export default class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: TodoStore.getAll()
    };
  }

  componentWillMount() {
    TodoStore.on('change', () => {
      this.setState({
        todos: TodoStore.getAll(),
      });
    });
  }

  render() {
    const {todos} = this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} text={todo.text} />
    });

    return (
      <div class="col-md-8">
        <h1 class="page-header">Todos</h1>
        <ul>
          {TodoComponents}
        </ul>
      </div>
    );
  }
}
