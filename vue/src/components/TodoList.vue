<template>
  <form class="todo-list">

    <ul>
      <TodoItem
        v-for="(todo, index) in todos"
        :todo="todo"
        :key="index"
        @delete="deleteTodo(index)"
        />
    </ul>

    <button type="button" @click="addTodo">
      + New todo
    </button>

    <pre>{{ printTodos }}</pre>
  </form>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
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
