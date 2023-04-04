import React, { useState } from "react";

const TaskItem = ({ task, onDelete, onUpdate, onToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task.title);

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleUpdate = () => {
    onUpdate({ ...task, title: updatedTask });
    setIsEditing(false);
  };

  const handleToggle = () => {
    onToggle(task.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setUpdatedTask(task.title);
  };

  const handleInputChange = (e) => {
    setUpdatedTask(e.target.value);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input type="text" value={updatedTask} onChange={handleInputChange} />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggle}
          />
          <span>{task.title}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
