
import { useState } from "react";

function BoardColumn({ title, tasks, onRename, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  // 이름 변경 저장
  const handleRename = (event) => {
    event.preventDefault();

    const newTitle = editedTitle.trim();

    if (!newTitle) {
      setEditedTitle(title);
      setIsEditing(false);
      return;
    }

    onRename(newTitle);
    setIsEditing(false);
  };

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
      </div>
      <div className="task-list">
        {tasks.map((task) => (
          <div className="task-card" key={task.id}>
            {task.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BoardColumn;
