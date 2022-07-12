import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div className="todo">
        <p
          onClick={() => {
            this.props.clickHandler(this.props.todo.id);
            console.log(event);
          }}>
          {this.props.todo.name}{" "}
          {this.props.todo.completed ? String.fromCharCode(0x2713) : ""}
        </p>
      </div>
    );
  }
}
