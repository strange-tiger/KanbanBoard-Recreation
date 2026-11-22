function TaskDetail({ task, setIsPopupOpen, onSave }) {
  return (
    <div className="modal-overlay">
      <div className="task-detail-modal">
        <h2>Task Details</h2>

        <button onClick={() => setIsPopupOpen(false)}>
          Close
        </button>
      </div>
    </div>
  );
}

export default TaskDetail;