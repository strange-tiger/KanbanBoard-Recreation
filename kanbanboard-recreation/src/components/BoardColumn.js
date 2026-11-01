function BoardColumn({ title, tasks }) {
    return (
        <div className="board-column">
            <div className="column-header">
                <h2>{title}</h2>
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