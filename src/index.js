import React from 'react';
import ReactDOM from 'react-dom';

const TaskList = ({tasks}) => {
  if(!tasks) return null;

  const list = tasks.map((task) => (
    <li>{task}</li>
  ));

  return <ul>{list}</ul>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: '', tasks: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("https://pma-project.firebaseio.com/tasks.json")
      .then(response => {
        return response.json();
      }).then(data => {
        if (data) {
          this.setState(() => ({ tasks: data }));
        }
      });
  }

  componentDidUpdate() {
    fetch("https://pma-project.firebaseio.com/tasks.json", {
      method: "PUT",
      body: JSON.stringify(this.state.tasks)
    });
  }

  handleClick() {
    const task = this.state.task;

    if(task) {
      this.setState(prevState => ({ tasks: [...prevState.tasks, task], task: '' }));
    }
  }

  handleChange(event) {
    const task = event.target.value;

    this.setState((prevState) => {
      return { task: task };
    });
  }

  render() {
    const title = this.state.task;
    
    return (
      <div>
        <h1>Project Management App</h1>
        <input onChange={this.handleChange} value={title} />
        <button onClick={this.handleClick}>'Add task'</button>
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
};

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);
