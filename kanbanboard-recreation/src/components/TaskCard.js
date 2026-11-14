
function TaskCard({ task }) {
  return (
    <div className="task-card">
      <span>{task.title}</span>
    </div>
  );
}

export default TaskCard;