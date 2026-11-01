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

  return (
    <div className="kanban-board">
      {columns.map((column) => (
        <BoardColumn
          key={column.id}
          title={column.title}
          tasks={column.tasks}
        />
      ))}
    </div>
  );
}

export default KanbanBoard;
