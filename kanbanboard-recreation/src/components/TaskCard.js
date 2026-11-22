import { useState } from "react";

function TaskCard({ task, onDelete, onRename, onOpen })
{
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleRename = (event) => {
    event.preventDefault();
    event.stopPropagation();

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
    <div className="task-card" onClick = {onOpen}>
      {isEditing ? (
        <form onSubmit={handleRename}>
          <input
            type="text"
            value={editedTitle}
            onChange={(event) => setEditedTitle(event.target.value)}
            autoFocus
          />

          <button
            type="submit"
            onClick={(event) => event.stopPropagation()}
          >
            Save
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setEditedTitle(task.title);
              setIsEditing(false);
            }}
          >
            Cancel
          </button>
        </form>
      ) : (
        <span
          onClick={(event) => {
            event.stopPropagation();
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
        onClick={(event) => {
          event.stopPropagation();
          onDelete();
        }}
        title="Delete task"
      >
        ×
      </button>
    </div>
  );
}

export default TaskCard;
