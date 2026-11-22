
import { useState } from "react";

function TaskDetail({ task, onClose, onSave }) {
  const [detail, setDetail] = useState({
    title: task.title,
    description: task.description || "",
    priority: task.priority || "medium",
    dueDate: task.dueDate || "",
    progress: task.progress || 0
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setDetail((prevDetail) => ({
      ...prevDetail,
      [name]: name === "progress" ? Number(value) : value
    }));
  };

  return (
    <div className="modal-overlay">
      <div className="task-detail-modal">
        <h2>Task Details</h2>
        <button type="button" onClick={onClose}>
          x
        </button>

        <div className="detail-field">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={detail.title}
            onChange={handleChange}
          />
        </div>

        <div className="detail-field">
          <label>Description</label>
          <textarea
            name="description"
            value={detail.description}
            onChange={handleChange}
            rows={4}
          />
        </div>

        <div className="detail-field">
          <label>Priority</label>
          <select
            name="priority"
            value={detail.priority}
            onChange={handleChange}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div className="detail-field">
          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={detail.dueDate}
            onChange={handleChange}
          />
        </div>

        <div className="detail-field">
          <label>Progress: {detail.progress}%</label>
          <input
            type="range"
            name="progress"
            min="0"
            max="100"
            value={detail.progress}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default TaskDetail;