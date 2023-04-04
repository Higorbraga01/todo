import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const onNewTodo = (value) => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        tittle: value,
        checked: false,
      },
    ]);
  };

  const toggle = (todo) => {
    setTodos(
      todos.map((obj) =>
        obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
      )
    );
  };

  const remove = (index) => {
    const novoArray = [...todos];
    novoArray.splice(index, 1);
    setTodos(novoArray);
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="tittle">todo</h1>
      </header>
      <section className="main">
        <NewTodo onNewTodo={onNewTodo} />
        <TodoList todos={todos} onToggle={toggle} onRemove={remove} />
      </section>
    </section>
  );
}

export default App;
