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
        {
          name: "watch tutorials",
          id: CreateId(),
          completed: false,
        },
        {
          name: "Study",
          id: CreateId(),
          completed: false,
        },
        {
          name: "make Coffee",
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

  handleClick = (itemID) => {
    this.setState({
      todosList: this.state.todosList.map((item) => {
        if (itemID === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return { ...item };
        }
      }),
    });
  };

  clearCompleted = () => {
    this.setState({
      todosList: this.state.todosList.map((item) => {
        if (!item.completed) {
          return item;
        } else {
          return this.state.todosList;
        }
      }),
    });
  };

  render() {
    return (
      <div>
        <TodoList todos={this.state.todosList} handleClick={this.handleClick} />
        <Form
          submitHandler={this.submitHandler}
          change={this.changeHandler}
          value={this.state.todo}
        />
        <button onClick={() => this.clearCompleted()}>Delete completed</button>
      </div>
    );
  }
}
