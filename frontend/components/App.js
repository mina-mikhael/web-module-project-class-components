import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";
let uId = 0;
const CreateId = () => ++uId;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todosList: [
        {
          name: "finish Module project for today",
          id: CreateId(),
          completed: false,
        },
      ],
      todo: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      todo: e.target.value,
    });
  };

  addTodo = (todo) => {
    const newTodo = {
      name: todo,
      id: CreateId(),
      completed: false,
    };

    const newTodosList = [...this.state.todosList, newTodo];

    this.setState({
      todosList: newTodosList,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.addTodo(this.state.todo);
    this.setState({ todo: "" });
  };

  clickHandler = (itemID) => {
    console.log("I was clicked", itemID);
    this.setState({
      todosList: this.state.todosList.map((item) => {
        if (itemID === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
      }),
    });
  };

  event;
  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todosList}
          clickHandler={this.clickHandler}
        />
        <Form
          submitHandler={this.submitHandler}
          change={this.changeHandler}
          value={this.state.todo}
        />
      </div>
    );
  }
}
