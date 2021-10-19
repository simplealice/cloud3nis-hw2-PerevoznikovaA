import '../App.css';

function Task({ todo, state, removeTask }) {
    return (
        <div key={todo.id} className="item-todo">
            <div className={todo.isComplete ? "item-text strike" : "item-text"}
                onClick={() => state(todo.id)}>
                {todo.task}
            </div>
            <div className="item-delete" onClick={() => removeTask(todo.id)}>
                DELETE
            </div>
            <div className="item-completed" onClick={() => state(todo.id)}>
                DONE
            </div>
        </div>
    )
}

export default Task