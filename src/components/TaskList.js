import React from "react";
import PropTypes from "prop-types";

const removeStyle = {
  background: "red",
  color: "white",
  cursor: "pointer",
  marginLeft: "5px",
  padding: "1px 5px"
};

const TaskList = ({ tasks, onRemoveTask }) => {
  if (!tasks) return null;

  const list = tasks.map((task, index) => (
    <li key={index}>
      {task.title}
      <span
        className="remove"
        style={removeStyle}
        onClick={() => onRemoveTask(task)}
      >
        x
      </span>
    </li>
  ));

  return <ul>{list}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  onRemoveTask: PropTypes.func
};

export default TaskList;
