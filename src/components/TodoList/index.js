/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import { MdDelete } from 'react-icons/md';

import './styles.css';

function TodoList({ todos, onToggle, onRemove }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={todo.id.toString()}>
          <span
            className={['todo', todo.checked ? 'checked' : ''].join(' ')}
            onClickCapture={() => onToggle && onToggle(todo)}
          >
            {todo.tittle}
          </span>
          <button
            className="remove"
            type="button"
            onClick={() => onRemove && onRemove(index)}
          >
            <MdDelete size={28} />
          </button>
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tittle: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
export default TodoList;
