import React from 'react';

const TodoItem = ({ task, index, deleteTask, editTask }) => (
  <li>
    <span>{task.title}</span>
    <br />
    <span>{task.description}</span>
    <br />
    <button onClick={() => deleteTask(index)}>Delete</button>
    <button onClick={() => editTask(index)}>Edit</button>
  </li>
);

export default TodoItem;