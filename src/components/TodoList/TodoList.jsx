// Изначальный код

// import React, { useState } from 'react';

// const TodoList = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [user, setUsers] = useState([]);
//   const [editingIndex, setEditingIndex] = useState(null);

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();

//     if (title.trim() === '' || description.trim() === '') {
//       return alert('Заполните поля!');
//     }

//     if (editingIndex !== null) {
//       const updatedUsers = [...user];
//       updatedUsers[editingIndex] = { title, description };
//       setUsers(updatedUsers);
//       setEditingIndex(null);
//     } else {
//       setUsers((prevUser) => [...prevUser, { title, description }]);
//     }

//     setTitle('');
//     setDescription('');
//   };

//   const deleteTask = (index) => {
//     const updatedUsers = [...user];
//     updatedUsers.splice(index, 1);
//     setUsers(updatedUsers);
//   };

//   const editTask = (index) => {
//     const taskToEdit = user[index];
//     setTitle(taskToEdit.title);
//     setDescription(taskToEdit.description);
//     setEditingIndex(index);
//   };

//   return (
//     <>
//       <h2>Todo List</h2>
//       <form onSubmit={onSubmit}>
//         <label>
//           <span>Title</span>
//           <br />
//           <input type="text" value={title} onChange={handleTitleChange} />
//         </label>
//         <br />
//         <label>
//           <span>Description</span>
//           <br />
//           <input type="text" value={description} onChange={handleDescriptionChange} />
//         </label>
//         <button>Add</button>
//       </form>
//       <ul>
//         {user.map((task, index) => (
//           <li key={index}>
//             <span>{task.title}</span>
//             <br />
//             <span>{task.description}</span>
//             <br />
//             <button onClick={() => deleteTask(index)}>Delete</button>
//             <button onClick={() => editTask(index)}>Edit</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default TodoList;

// Код после разделения на компоненты.

import React, { useState } from 'react';
import TodoForm from './components/TodoForm /TodoForm'
import TaskList from './components/TaskList/TaskList';

const TodoList = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [user, setUsers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '' || description.trim() === '') {
      return alert('Заполните поля!');
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
  };

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
      <TodoForm
        onSubmit={onSubmit}
        title={title}
        handleTitleChange={handleTitleChange}
        description={description}
        handleDescriptionChange={handleDescriptionChange}
      />
      <TaskList tasks={user} deleteTask={deleteTask} editTask={editTask} />
    </>
  );
};

export default TodoList;