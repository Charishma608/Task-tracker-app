import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { FaTasks, FaCheckCircle, FaInbox, FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import TaskItem from './TaskItem';
import '../styles/tasks.css';

const TaskList = ({ tasks, onToggle, onDelete, filter = 'all' }) => {
  const [sortOrder, setSortOrder] = useState('desc'); 

  const toggleSortOrder = () => {
    setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc');
  };
  // Filter tasks
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true; 
  });

 
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }
    const timeA = new Date(a.timestamp).getTime();
    const timeB = new Date(b.timestamp).getTime();
    return sortOrder === 'desc' ? timeB - timeA : timeA - timeB;
  });


  const taskCounts = {
    all: tasks.length,
    active: tasks.filter(task => !task.completed).length,
    completed: tasks.filter(task => task.completed).length
  };

 
  const getEmptyState = () => {
    if (tasks.length === 0) {
      return (
        <div className="empty-state">
          <div className="empty-state-icon">
            <FaTasks />
          </div>
          <h3>No tasks yet</h3>
          <p>Add your first task to get started</p>
        </div>
      );
    }

    if (filter === 'completed' && taskCounts.completed === 0) {
      return (
        <div className="empty-state">
          <div className="empty-state-icon">
            <FaCheckCircle />
          </div>
          <h3>No completed tasks</h3>
          <p>Complete some tasks to see them here</p>
        </div>
      );
    }

    if (filter === 'active' && taskCounts.active === 0) {
      return (
        <div className="empty-state">
          <div className="empty-state-icon">
            <FaInbox />
          </div>
          <h3>No active tasks</h3>
          <p>All caught up! Add a new task or check completed tasks</p>
        </div>
      );
    }

    return null;
  };

  const emptyState = getEmptyState();

  return (
    <div className="task-list-container">
      <div className="task-list-header">
        <div className="task-list-header-content">
          <h2 className="task-list-title">
            {filter === 'completed' ? 'Completed Tasks' : 
             filter === 'active' ? 'Active Tasks' : 'All Tasks'}
            <span className="task-count">
              {filteredTasks.length} {filteredTasks.length === 1 ? 'task' : 'tasks'}
            </span>
          </h2>
          <button 
            className="sort-button" 
            onClick={toggleSortOrder}
            aria-label={`Sort by creation time ${sortOrder === 'desc' ? 'newest first' : 'oldest first'}`}
            title={`Sort by creation time (${sortOrder === 'desc' ? 'newest first' : 'oldest first'})`}
          >
            {sortOrder === 'desc' ? <FaSortDown /> : sortOrder === 'asc' ? <FaSortUp /> : <FaSort />}
            <span>Creation Time</span>
          </button>
        </div>
      </div>
      
      {emptyState ? (
        emptyState
      ) : (
        <div className="task-list">
          {sortedTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
