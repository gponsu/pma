import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import taskRepository from './repositories/task';

class App extends React.Component {
  state = { tasks: [] }

  async componentDidMount() {
    const tasks = await taskRepository.findAll();
    return this.setState({ tasks });
  }

  handleAddTask = (task) => {
    if(!task) return;

    this.setState(prevState => ({ 
      tasks: [...prevState.tasks, task] 
    }));

    taskRepository.save(task);
  }

  render() {
    return (
      <div>
        <h1>Project Management App</h1>
        <AddTaskForm onAddTask={this.handleAddTask} />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
