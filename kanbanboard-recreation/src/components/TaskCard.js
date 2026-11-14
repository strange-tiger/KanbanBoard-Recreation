
function TaskCard({ task, onDelete }) {
  return (
    <div className="task-card">
      <span>{task.title}</span>

      <button
        className="delete-task-button"
        onClick={onDelete}
        title="Delete task"
      >
        ×
      </button>
    </div>
  );
}

export default TaskCard;
