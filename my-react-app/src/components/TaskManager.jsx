import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (newTask.trim()) {
      const task = { id: Date.now(), text: newTask, completed: false };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          className="border px-2 py-1 flex-grow rounded"
          placeholder="Enter a new task"
        />
        <button onClick={addTask} className="bg-blue-600 text-white px-4 py-1 rounded">
          Add
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        {['all', 'active', 'completed'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-2 py-1 rounded ${
              filter === f ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <ul className="space-y-2">
        {filteredTasks.map(task => (
          <li key={task.id} className="flex justify-between items-center">
            <span
              onClick={() => toggleComplete(task.id)}
              className={`cursor-pointer ${task.completed ? 'line-through text-gray-400' : ''}`}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} className="text-red-500 text-sm">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
