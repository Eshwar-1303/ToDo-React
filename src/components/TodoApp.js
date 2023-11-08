import React, { useState } from 'react';
import TaskInputRenderer from './TaskInputRenderer';
import TaskPriorityRenderer from './TaskPriorityRenderer';
import TaskDatePickerRenderer from './TaskDatePickerRenderer';
import taskSchema from '../schemas/taskSchema';

import './TodoApp.css';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Low',
  });

  const handleAddTask = () => {
    if (!newTask || !newTask.title || newTask.title.trim() === '') return;
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setNewTask({ ...newTask, title: '' });
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-app">
      <h1 className="heading">To-Do List</h1>
      <div className="task-form">
        <TaskInputRenderer
          schema={taskSchema}
          data={newTask}
          path=""
          onChange={setNewTask}
        />
        <TaskPriorityRenderer
          schema={taskSchema}
          data={newTask}
          path="priority"
          onChange={(newPriority) => setNewTask({ ...newTask, priority: newPriority })}
        />
        <TaskDatePickerRenderer
          schema={taskSchema}
          data={newTask}
          path="dueDate"
          onChange={(newDueDate) => setNewTask({ ...newTask, dueDate: newDueDate })}
        />
        <button className="add-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div className="task" key={index}>
            <TaskInputRenderer
              schema={taskSchema}
              data={task}
              path={`tasks[${index}]`}
              onChange={(updatedTask) => {
                const updatedTasks = [...tasks];
                updatedTasks[index] = updatedTask;
                setTasks(updatedTasks);
              }}
            />
            <button className="delete-button" onClick={() => handleDeleteTask(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
