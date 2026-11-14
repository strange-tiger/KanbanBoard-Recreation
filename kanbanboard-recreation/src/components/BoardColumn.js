
import { useState } from "react";
import TaskCard from "./TaskCard";

function BoardColumn({ id, title, tasks, onRename, onDelete, onAddTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [taskTitle, setTaskTitle] = useState("");

  const handleRename = (event) => {
    event.preventDefault();

    const newTitle = editedTitle.trim();

    if (newTitle.length === 0) {
      setEditedTitle(title);
      setIsEditing(false);
      return;
    }

    onRename(newTitle);
    setIsEditing(false);
  };

  const handleAddTask = (event) => {
    event.preventDefault();

    if (taskTitle.trim().length === 0)
    {
        return;
    }

    onAddTask(id, taskTitle);
    setTaskTitle("");
  }

  return (
    <div className="board-column">
      <div className="column-header">
        {isEditing ? (
          <form onSubmit={handleRename}>
            <input
              type="text"
              value={editedTitle}
              onChange={(event) =>
                setEditedTitle(event.target.value)
              }
              autoFocus
            />
            <button type="submit">Save</button>
          </form>
        ) : (
          <h2
            onClick={() => {
              setEditedTitle(title);
              setIsEditing(true);
            }}
            title="Click to rename"
          >
            {title}
          </h2>
        )}
        <span>{tasks.length}</span>

        <button
          className="delete-column-button"
          onClick={onDelete}
          title="Delete column"
        >
          ×
        </button>
      </div>
      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))}
      </div>

      <form className="add-task-form" onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Enter task title..."
          value={taskTitle}
          onChange={(event) =>
            setTaskTitle(event.target.value)
          }
        />

        <button type="submit">
          + Add Task
        </button>
      </form>
    </div>
  );
}

export default BoardColumn;
