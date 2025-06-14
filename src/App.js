import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './styles/global.css';

const FILTERS = {
  ALL: 'all',
  COMPLETED: 'completed',
  INCOMPLETE: 'incomplete'
};


function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState(FILTERS.ALL);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = ({ title, description }) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
      timestamp: Date.now()
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === FILTERS.COMPLETED) return task.completed;
    if (filter === FILTERS.INCOMPLETE) return !task.completed;
    return true;
  });

  // Task count calculations
  const taskCounts = {
    all: tasks.length,
    completed: tasks.filter(task => task.completed).length,
    incomplete: tasks.filter(task => !task.completed).length
  };

  // Task Management Component
  const TaskManager = () => (
    <div className="task-manager">
      <div className="task-manager-container">
        <div className="task-form-container">
          <h2>Add New Task</h2>
          <TaskForm onAdd={addTask} />
        </div>
        <div className="task-list-container">
          <div className="task-filters">
            <button
              className={`filter-btn ${filter === FILTERS.ALL ? 'active' : ''}`}
              onClick={() => setFilter(FILTERS.ALL)}
              aria-pressed={filter === FILTERS.ALL}
            >
              <span>All</span>
              <span className="filter-count">{taskCounts.all}</span>
            </button>
            <button
              className={`filter-btn ${filter === FILTERS.INCOMPLETE ? 'active' : ''}`}
              onClick={() => setFilter(FILTERS.INCOMPLETE)}
              aria-pressed={filter === FILTERS.INCOMPLETE}
            >
              <span>Incomplete</span>
              <span className="filter-count">{taskCounts.incomplete}</span>
            </button>
            <button
              className={`filter-btn ${filter === FILTERS.COMPLETED ? 'active' : ''}`}
              onClick={() => setFilter(FILTERS.COMPLETED)}
              aria-pressed={filter === FILTERS.COMPLETED}
            >
              <span>Completed</span>
              <span className="filter-count">{taskCounts.completed}</span>
            </button>
          </div>
          <TaskList 
            tasks={filteredTasks} 
            onToggle={toggleTask} 
            onDelete={deleteTask} 
          />
        </div>
      </div>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <Layout>
              <HomePage />
            </Layout>
          } 
        />
        <Route 
          path="/tasks" 
          element={
            <Layout>
              <div className="container py-5">
                <h1>My Tasks</h1>
                <TaskManager />
              </div>
            </Layout>
          } 
        />
        <Route 
          path="/about" 
          element={
            <Layout>
              <AboutPage />
            </Layout>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <Layout>
              <ContactPage />
            </Layout>
          } 
        />
        <Route 
          path="*" 
          element={
            <Layout>
              <div className="container py-5 text-center">
                <h1>404 - Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
              </div>
            </Layout>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
