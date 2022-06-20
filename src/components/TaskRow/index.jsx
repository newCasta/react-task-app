import './index.css'

const TaskRow = ({ task, toggleTask }) => {
    return (
        <tr className="TableRow">
            <td>
                <div>{task.name}</div>
                <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} />
            </td>
        </tr>
    )
}
export default TaskRow