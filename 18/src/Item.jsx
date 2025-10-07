import React from 'react';

// BEGIN (write your solution here)
const Item = ({ task, onToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onToggle(task.id, task.state);
  };

  return (
    <div className="row mb-2">
      <div className="col-1">{task.id}</div>
      <div className="col">
        <a
          href="#"
          className="todo-task"
          onClick={handleClick}
          style={{
            textDecoration: task.state === 'finished' ? 'line-through' : 'none',
            color: task.state === 'finished' ? '#6c757d' : '#000',
          }}
        >
          {task.text}
        </a>
      </div>
    </div>
  );
};

export default Item;
// END
