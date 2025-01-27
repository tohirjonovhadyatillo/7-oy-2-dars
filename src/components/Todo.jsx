import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleComplete, deleteTodo } from './todoSlice';

const TodoList = () => {
  const [task, setTask] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (task) {
      dispatch(addTodo({ id: Date.now(), text: task, completed: false }));
      setTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => dispatch(toggleComplete({ id: todo.id }))}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo({ id: todo.id }))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
