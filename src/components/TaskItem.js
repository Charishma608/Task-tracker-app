import React from 'react';
import { FaCheck, FaTrash, FaClock } from 'react-icons/fa';
import { format } from 'date-fns';
import '../styles/tasks.css';

const TaskItem = ({ task, onToggle, onDelete }) => {
  const handleToggle = (e) => {
    e.stopPropagation();
    onToggle(task.id);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDelete(task.id);
    }
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div 
        className={`task-checkbox ${task.completed ? 'checked' : ''}`}
        onClick={handleToggle}
        role="checkbox"
        aria-checked={task.completed}
        aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
        tabIndex="0"
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleToggle(e)}
      >
        <FaCheck className="check-icon" />
      </div>
      
      <div className="task-content">
        <h3 className="task-title">
          {task.title}
        </h3>
        {task.description && (
          <p className="task-description">
            {task.description}
          </p>
        )}
        <div className="task-meta">
          <span className="task-timestamp" title={new Date(task.timestamp).toString()}>
            <FaClock className="icon" />
            {format(new Date(task.timestamp), 'MMM d, yyyy h:mm a')}
          </span>
        </div>
      </div>
      
      <button 
        className="btn-delete"
        onClick={handleDelete}
        aria-label={`Delete task: ${task.title}`}
        title="Delete task"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default TaskItem;
