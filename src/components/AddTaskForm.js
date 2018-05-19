import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Task from '../models/task';

class AddTaskForm extends Component {
  state = { task: '' }

  handleChange = (event) => {
    const task = event.target.value;

    this.setState({ task });
  }

  handleSubmit = (event) => {
    const { onAddTask } = this.props;

    const attrs = {
      id: uuid(),
      title: this.state.task
    };

    const newTask = new Task(attrs);

    event.preventDefault();
    onAddTask(newTask);

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
