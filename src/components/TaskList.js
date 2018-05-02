import React from 'react';
import ReactDOM from 'react-dom';

const TaskList = ({tasks}) => {
  if(!tasks) return null;

  const list = tasks.map((task, index) => (
    <li key={index}>{task}</li>
  ));

  return <ul>{list}</ul>;
}

export default TaskList;
