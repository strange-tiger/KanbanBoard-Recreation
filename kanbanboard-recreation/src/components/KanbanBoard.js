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

    setColumns(function(prevColumns) {
      const updatedColumns = [];

      for (let i = 0; i < prevColumns.length; i++)
      {
        updatedColumns.push(prevColumns[i]);
      }

      updatedColumns.push(newColumn);

      return updatedColumns;
    });

    setNewColumnTitle("");
  };

  return (
    <div className="kanban-container">
      <div className="kanban-board">
        {columns.map((column) => (
          <BoardColumn
            key={column.id}
            title={column.title}
            tasks={column.tasks}
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
