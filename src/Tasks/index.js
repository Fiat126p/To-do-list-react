import "./style.css"

const Tasks = (props) => (
    <ul className="tasks">
        {props.tasks.map(task => (
            <li 
            key={task.id}
            className={`tasks__item ${task.done && props.hideDoneTasks ? " tasks__item--hidden" : ""}`}>
                <button className="tasks__button" >
                    {task.done ? "✔" : ""}
                </button>
                <span className={`tasksContent ${task.done ? "tasksContent--done" : ""}`}>{task.content}
                </span>
                <button className=" tasks__buttonRemove">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;