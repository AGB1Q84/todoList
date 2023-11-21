import React from 'react';
import TodoItem from '../TodoItem/TodoItem';


const TaskList = ({ tasks, deleteTask, editTask }) => (
  <ul>
    {tasks.map((task, index) => (
      <TodoItem key={index} task={task} index={index} deleteTask={deleteTask} editTask={editTask} />
    ))}
  </ul>
);

export default TaskList;