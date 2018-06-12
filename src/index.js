import React from "react";
import ReactDOM from "react-dom";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import Timer from "./components/Timer";
import taskRepository from "./repositories/task";
import pomodoroRepository from "./repositories/pomodoro";
import uuid from "uuid/v4";

class App extends React.Component {
  state = { tasks: [] };

  async componentDidMount() {
    const tasks = await taskRepository.findAll();
    return this.setState({ tasks });
  }

  handleAddTask = task => {
    if (!task) return;

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));

    taskRepository.save(task);
  };

  handleRemoveTask = task => {
    if (!task) return;

    const newTasks = this.state.tasks.filter(t => t !== task);

    this.setState({
      tasks: newTasks
    });

    taskRepository.remove(task);
  };

  render() {
    return (
      <div>
        <h1>Project Management App</h1>
        <AddTaskForm onAddTask={this.handleAddTask} />
        <TaskList
          tasks={this.state.tasks}
          onRemoveTask={this.handleRemoveTask}
        />
        <Timer
          onDone={() => {
            pomodoroRepository.save({
              id: uuid(),
              timestamp: Date.now(),
              duration: 25 * 60,
              completed: true
            });
          }}
          onCancel={duration => {
            pomodoroRepository.save({
              id: uuid(),
              timestamp: Date.now(),
              duration,
              completed: false
            });
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
