import "./style.css"

const Tasks = ({ tasks,hideDone,removeTask }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li 
            key={task.id}
            className={`tasks__item ${task.done && hideDone ? " tasks__item--hidden" : ""}`}>
                <button className="tasks__button" >
                    {task.done ? "✔" : ""}
                </button>
                <span className={`tasksContent ${task.done ? "tasksContent--done" : ""}`}>{task.content}
                </span>
                <button className=" tasks__buttonRemove"
                onClick={() => removeTask(task.id)}
                >🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;