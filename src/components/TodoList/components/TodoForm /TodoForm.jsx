// import React, { useState } from 'react';

// const TodoForm = ({ onSubmit, title, description, handleTitleChange, handleDescriptionChange }) => {
//   return (
//     <form onSubmit={onSubmit}>
//       <label>
//         <span>Title</span>
//         <br />
//         <input type="text" value={title} onChange={handleTitleChange} />
//       </label>
//       <br />
//       <label>
//         <span>Description</span>
//         <br />
//         <input type="text" value={description} onChange={handleDescriptionChange} />
//       </label>
//       <button>Add</button>
//     </form>
//   );
// };

// export default TodoForm;

import React from 'react';

const TodoForm = ({ onSubmit, title, handleTitleChange, description, handleDescriptionChange }) => (
  <form onSubmit={onSubmit}>
    <label>
      <span>Title</span>
      <br />
      <input type="text" value={title} onChange={handleTitleChange} />
    </label>
    <br />
    <label>
      <span>Description</span>
      <br />
      <input type="text" value={description} onChange={handleDescriptionChange} />
    </label>
    <button>Add</button>
  </form>
);

export default TodoForm;