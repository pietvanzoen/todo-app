function TodoItem({ index, done, title, updateTodo, deleteTodo }) {
  return (
    <div className="todo">
      <input
        className="checkbox"
        type="checkbox"
        checked={done}
        onChange={({ target }) => updateTodo(index, { done: target.checked })}
      />
      <input
        type="text"
        placeholder="Todo title"
        value={title}
        onChange={({ target }) => updateTodo(index, { title: target.value })}
      />
      <button
        type="button"
        className="delete-button"
        onClick={() => deleteTodo(index)}
      >
        X
      </button>
    </div>
  );
}

export default TodoItem;
