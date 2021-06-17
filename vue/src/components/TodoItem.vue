<template>
  <div class="todo">
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
      @click="$emit('delete')"
      >
      X
    </button>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>
