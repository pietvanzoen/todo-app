import { useState } from "react";
import TodoItem from "./TodoItem";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      done: false,
      title: "Do laundry",
    },
    {
      done: false,
      title: "Pick up package",
    },
  ]);

  function newTodo() {
    setTodos(
      todos.concat({
        done: false,
        title: "",
      })
    );
  }

  function deleteTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function updateTodo(todoIndex, data) {
    const newTodos = [...todos];
    newTodos[todoIndex] = {
      ...newTodos[todoIndex],
      ...data,
    };
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <header className="header">
        <h1>React Todo App</h1>
      </header>
      <form className="todo-list">
        <ul>
          {todos.map((todo, i) => (
            <TodoItem
              key={i}
              index={i}
              {...todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        <button type="button" onClick={newTodo}>
          + New todo
        </button>
      </form>
    </div>
  );
}

export default App;
