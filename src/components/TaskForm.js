import React, { useState, useRef, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import '../styles/tasks.css';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        if (!title && !description) {
          setIsExpanded(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [title, description]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError('Title is required');
      return;
    }

    onAdd({ title, description });
    setTitle('');
    setDescription('');
    setError('');
    setIsExpanded(false);
  };

  const handleAddClick = () => {
    setIsExpanded(true);
  };

  if (!isExpanded) {
    return (
      <button 
        className="add-task-button"
        onClick={handleAddClick}
        aria-label="Add new task"
      >
        <FaPlus className="add-icon" />
        <span>Add Task</span>
      </button>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
        <input
          type="text"
          id="task-title"
          className={`form-input ${error ? 'error' : ''}`}
          placeholder="Task title (required)"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError('');
          }}
          autoFocus
          aria-label="Task title"
          aria-invalid={!!error}
          aria-describedby={error ? 'title-error' : undefined}
        />
        {error && (
          <p id="title-error" className="error-message">
            {error}
          </p>
        )}
      </div>
      
      <div className="form-group">
        <textarea
          id="task-description"
          className="form-input"
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          aria-label="Task description"
        />
      </div>
      
      <div className="form-actions">
        <button
          type="button"
          className="btn btn-cancel"
          onClick={() => {
            if (!title && !description) {
              setIsExpanded(false);
            } else if (window.confirm('Are you sure you want to discard this task?')) {
              setTitle('');
              setDescription('');
              setError('');
              setIsExpanded(false);
            }
          }}
        >
          Cancel
        </button>
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={!title.trim()}
        >

          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
