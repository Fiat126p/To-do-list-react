import "./style.css"

const Tasks = (props) => (
    <ul className="tasks">
        {props.tasks.map(task => (
            <li 
            key={task.id}
            className={`list__item ${task.done && props.hideDoneTasks ? " list__item--hidden" : ""}`}>
                <button className="list__button" >
                    {task.done ? "✔" : ""}
                </button>
                <span className={`list__taskContent ${task.done ? "list__task--done" : ""}`}>{task.content}
                </span>
                <button className=" list__buttonRemove">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;