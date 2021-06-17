<template>
  <form class="todo-list">
    <ul>
      <div v-for="(todo, index) in todos" :key="`todo-${index}`" class="todo">
        <input
          class="checkbox"
          type="checkbox"
          v-model="todo.done"
          />
        <input
          type="text"
          placeholder="Todo title"
          v-model="todo.title"
          />
        <button
          type="button"
          class="delete-button"
          @click="deleteTodo(index)"
          >
          X
        </button>
      </div>
    </ul>
    <button type="button" @click="addTodo">
      + New todo
    </button>

    <pre>{{ printTodos }}</pre>
  </form>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        {
          done: false,
          title: "Do laundry",
        },
        {
          done: false,
          title: "Pick up package",
        },
      ]
    };
  },
  computed: {
    printTodos() {
      return JSON.stringify(this.todos, null, 2);
    }
  },
  methods: {
    addTodo() {
      this.todos.push({
        done: false,
        title: ""
      });
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    }
  }
}

</script>
