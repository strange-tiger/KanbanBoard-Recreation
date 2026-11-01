import "./App.css";
import KanbanBoard from "./components/KanbanBoard";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>My Kanban Board</h1>
      </header>

      <main className="main">
        <KanbanBoard />
      </main>
    </div>
  );
}

export default App;
