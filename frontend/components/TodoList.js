import React from 'react'
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h2>Todos:</h2>
        {this.props.todos.map((element) => {
          return (
            <Todo
              key={element.id}
              todo={element}
              handleClick={this.props.handleClick}
            />
          );
        })}
      </div>
    );
  }
}
