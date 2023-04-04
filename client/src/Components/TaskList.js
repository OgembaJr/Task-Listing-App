import "./TaskList.css";
import NewTaskForm from "./NewTaskForm";
import React, { useState, useEffect } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await fetch("http://localhost:3000/api/v1/tasks");
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchTasks();
  }, []);

  const handleTaskClick = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  
  const handleDeleteClick = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/v1/tasks/${id}`, {
        method: "DELETE",
      });
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleNewTaskSubmit = async (title, description) => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description }),
      });
      const data = await response.json();
      setTasks([...tasks, data]);
    } catch (error) {
      console.error(error);
    }
  };
  
  
  

  return (
    <>
  <div className="task-form">
    <NewTaskForm onSubmit={handleNewTaskSubmit} />
  </div>

  <div className="task-list">
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? "done" : ""}>
          <div className="task-info">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
          <div className="actions">
            {task.completed ? (
              <span className="completed">Completed</span>
            ) : (
              <div className="actions">
                <button onClick={() => handleTaskClick(task.id)}>Mark as done</button>
                <button className="delete" onClick={() => handleDeleteClick(task.id)}>Delete</button>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  </div>
</>
 
  );
}

export default TaskList;
