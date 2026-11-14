import { useState } from 'react';
import BoardColumn from "./BoardColumn";

function KanbanBoard() {
  const [columns, setColumns] = useState([
    {
      id: "todo",
      title: `Todo`,
      tasks: [
        { id: 1, title: "React 공부하기" },
        { id: 2, title: "Kanban UI 만들기" }
      ]
    },
    {
      id: "progress",
      title: `In progress`,
      tasks: [
        { id: 3, title: "컴포넌트 분석하기" }
      ]
    },
    {
      id: "done",
      title: `Done`,
      tasks: [
        { id: 4, title: "React 프로젝트 생성" }
      ]
    }
  ]);

  const [newColumnTitle, setNewColumnTitle] = useState("");

  const addColumn = (event) => {
    event.preventDefault();

    const title = newColumnTitle.trim();

    if (title.length === 0)
    {
      return;
    }

    const newColumn = {
      id: Date.now(),
      title: title,
      tasks: []
    }

    setColumns((prevColumns) => prevColumns.concat(newColumn));

    setNewColumnTitle("");
  }

  const renameColumn = (columnId, newTitle) => {
    setColumns((prevColumns) => prevColumns.map((column) =>
      column.id === columnId ?
        {
          id: column.id,
          title: newTitle,
          tasks: column.tasks
        }
        : column)
    );
  }

  const deleteColumn = (columnId) => {
    setColumns((prevColumns) => prevColumns.filter((column) => column.id !== columnId)
    );
  };

  const addTask = (columnId, taskTitle) => {
    const title = taskTitle.trim();

    if (title.length === 0)
    {
      return;
    }

    const newTask = {
      id: `${Date.now()}`,
      title
    }

    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === columnId
          ? {
              id: column.id,
              title: column.title,
              tasks: column.tasks.concat(newTask)
            }
            : column
      )
    );
  }

  const deleteTask = (columnId, taskId) => {
    setColumns((prevColumns) =>
        prevColumns.map((column) =>
            column.id === columnId
                ? {
                    id: column.id,
                    title: column.title,
                    tasks: column.tasks.filter(
                        (task) => task.id !== taskId
                    )
                }
                : column
          )
      );
  };

  return (
    <div className="kanban-container">
      <div className="kanban-board">
        {columns.map((column) => (
          <BoardColumn
            key={column.id}
            id={column.id}
            title={column.title}
            tasks={column.tasks}
            onRenameColumn={(newTitle) => renameColumn(column.id, newTitle)}
            onDeleteColumn={() => deleteColumn(column.id)}
            onAddTask={addTask}
            onDeleteTask={deleteTask}
          />
        ))}
      </div>

      <form className="add-column-form" onSubmit={addColumn}>
        <input
          type="text"
          placeholder="New column name"
          value={newColumnTitle}
          onChange={(event) =>
            setNewColumnTitle(event.target.value)
          }
        />

        <button type="submit">
          + Add Column
        </button>
      </form>
    </div>
  );
}

export default KanbanBoard;
