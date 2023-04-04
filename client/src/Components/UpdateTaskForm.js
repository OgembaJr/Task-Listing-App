import React, { useState } from "react";

const UpdateTaskForm = ({ task, onUpdate }) => {
  const [description, setDescription] = useState(task.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate({ ...task, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button type="submit">Update Task</button>
    </form>
  );
};

export default UpdateTaskForm;
