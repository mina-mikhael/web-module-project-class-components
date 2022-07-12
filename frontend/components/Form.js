import React from 'react'


export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.submitHandler}>
          <input type="text" name={"todoName"} placeholder="enter new todo here" value={this.props.value} onChange={this.props.change} />
          &nbsp;
          <button> Add </button>
        </form>
      </div>
    );
  }
}
