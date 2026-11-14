import { useState } from "react";

function TaskCard({ task, onDelete, onRename }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleRename = (event) => {
    event.preventDefault();

    const newTitle = editedTitle.trim();

    if (newTitle.length === 0)
    {
      setEditedTitle(task.title);
      setIsEditing(false);
      return;
    }

    onRename(newTitle);
    setIsEditing(false);
  }
  return (
    <div className="task-card">
      {isEditing ? (
        <form onSubmit={handleRename}>
          <input
            type="text"
            value={editedTitle}
            onChange={(event) => setEditedTitle(event.target.value)}
            autoFocus
          />

          <button type="submit">Save</button>

          <button
            type="button"
            onClick={() => {
              setEditedTitle(task.title);
              setIsEditing(false);
            }}
          >
            Cancel
          </button>
        </form>
      ) : (
        <span
          onClick={() => {
            setEditedTitle(task.title);
            setIsEditing(true);
          }}
          title="Click to rename"
        >
          {task.title}
        </span>
      )}

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
