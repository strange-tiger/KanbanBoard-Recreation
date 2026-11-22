function TaskDetail({ task, onClose, onSave }) {
  return (
    <div className="modal-overlay">
      <div className="task-detail-modal">
        <h2>Task Details</h2>
        <h3>{task.title}</h3>
        <div className="form-field">
          <label>Description</label>
          <p>{task.description}</p>
        </div>
        <div className="form-field">
          <label>Priority</label>
          <p>{task.priority}</p>
        </div>
        <div className="form-field">
          <label>Due Date</label>
          <p>{task.dueDate || "No due date"}</p>
        </div>
        <div className="form-field">
          <label>Progress</label>
          <p>{task.progress}%</p>
        </div>
      </div>
    </div>
  );
}

export default TaskDetail;