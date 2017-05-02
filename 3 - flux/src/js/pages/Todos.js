import React from 'react';
import Todo from '../components/Todo';

export default class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 123,
          text: 'Study ReactJs',
          complete: false
        },
        {
          id: 456,
          text: 'Study Guitar',
          complete: false
        }
      ]
    };
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
