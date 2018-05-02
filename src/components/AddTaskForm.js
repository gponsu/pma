import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class AddTaskForm extends Component {
  state = { task: '' }

  handleChange = (event) => {
    const task = event.target.value;

    this.setState({ task });
  }

  handleSubmit = (event) => {
    const { onAddTask } = this.props;

    event.preventDefault();
    onAddTask(this.state.task);

    this.setState({ task: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.task} />
        <button>Add task</button>
      </form>
    );
  }
}

export default AddTaskForm;
