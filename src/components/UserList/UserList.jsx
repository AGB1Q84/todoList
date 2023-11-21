// import React from "react";
import React, { useState } from 'react';
// import UserList from "../UserList/UserList";

const TodoList = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    //обработчики для изменения инпутов

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
      };
    
      const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
      };
       // // для отображения сохраненного списка
    const [user, setUsers] = useState ([]);
    const [editingIndex, setEditingIndex] = useState(null);

      const onSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === "" || description.trim() === "") {
          return alert("Заполните поля!");
        }

        if (editingIndex !== null) {
            const updatedUsers = [...user];
            updatedUsers[editingIndex] = { title, description };
            setUsers(updatedUsers);
            setEditingIndex(null);
          } else {
            setUsers((prevUser) => [...prevUser, { title, description }]);
          }
      
          setTitle('');
          setDescription('');
    }
    const deleteTask = (index) => {
        const updatedUsers = [...user];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
      };
    
      const editTask = (index) => {
        const taskToEdit = user[index];
        setTitle(taskToEdit.title);
        setDescription(taskToEdit.description);
        setEditingIndex(index);
      };
    
  return ( 
    <>
      <h2>Todo List</h2>
      <form onSubmit={onSubmit}>
          <label>
              <span>Title</span>
              <br/>
              <input type="text" value={title} onChange={handleTitleChange}/>
          </label>
          <br/>
          <label>
              <span>Description</span>
              <br/>
              <input type="text" value={description} onChange={handleDescriptionChange}/>
          </label>
          <button>Add</button>
      </form>
      <ul>
          {user.map((task, index) => {
              return <li key={index}>
                          <span>{task.title}</span>
                          <br/>
                          <span>{task.description}</span>
                          <br/>
                          <button onClick={() => deleteTask(index)}>Delete</button>
                          <button onClick={() => editTask(index)}>Edit</button>
                      </li>
          })}
      </ul>
  </>)
}
export default TodoList;