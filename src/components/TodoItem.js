import React, {useState} from 'react';
import moment from 'moment'


function TodoItem({todo, handleChange}) {
  let {description, dueDate, isOverdue, isComplete, id} = todo
  const classNames = ['todo-item']
  if (isOverdue && !isComplete) {
    classNames.push('is-overdue')
  }
  if (isComplete) {
    classNames.push('is-complete')
  }

  return (
    <div className={classNames.join(" ")}>
      <div className='first-half-todo'>
        <input
          className='checkbox'
          type='checkbox'
          checked={isComplete}
          onChange={(e) => handleChange(e, id)}
          >
        </input>
        <p className='todo-description'>{description}</p>
      </div>
      <p className={`${dueDate ? "todo-due-date": ""}`}>{dueDate? moment(dueDate).format('MM/DD/YYYY') : ''}</p>
    </div>
  );
}

export default TodoItem;
