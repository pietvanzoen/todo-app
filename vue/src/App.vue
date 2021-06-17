<template>
  <div className="app">
    <header className="header">
      <h1>Vue Todo App</h1>
    </header>
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  background-color: #282c34;
  min-height: 100vh;
  color: #ccc;
}

.app {
  padding-top: 10rem;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  animation: App-logo-spin infinite 20s linear;
  height: 20vmin;
  pointer-events: none;
}

.todo-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}

.todo {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}

.checkbox {
  line-height: 1;
  font-size: 1.4em;
  width: 1.4em;
  height: 1.4em;
}

.checkbox:checked + input {
  text-decoration: line-through;
}

ul {
  list-style: none;
  padding: 0;
  line-height: 2rem;
  width: 500px;
}

input {
  border: none;
  background: transparent;
  color: white;
  font-size: 1.4rem;
  outline: none;
  width: 100%;
}

.delete-button {
  border: none;
  appearance: none;
  background: none;
  color: white;
  cursor: pointer;
}
</style>
