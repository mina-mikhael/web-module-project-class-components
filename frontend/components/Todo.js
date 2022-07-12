import React from 'react'

export default class Todo extends React.Component {
  clickHandler = (idx) => {
    this.props.handleClick(idx);
  };

  render() {
    return (
      <div className="todo">
        <p
          onClick={() => {
            this.clickHandler(this.props.todo.id);
          }}>
          {this.props.todo.name}{" "}
          {this.props.todo.completed ? String.fromCharCode(0x2713) : ""}
        </p>
      </div>
    );
  }
}
