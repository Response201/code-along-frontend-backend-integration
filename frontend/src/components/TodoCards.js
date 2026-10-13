
function TodoCard({ todo, onDelete, onToggle }) {
  return (
    <article className="todo-card">
      <span className={todo.done ? "done" : ""}>
        {todo.task}
      </span>

      <div className="todo-actions">
        <button onClick={() => onToggle(todo)}>
          {todo.done ? "Done" : "Not done"}
        </button>

        <button onClick={() => onDelete(todo.id)}>
          Ta bort
        </button>
      </div>
    </article>
  );
}

export default TodoCard;