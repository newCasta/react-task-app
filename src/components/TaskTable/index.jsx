import TaskRow from "../TaskRow"

const TaskTable = ({ tasks, toggleTask }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                </tr>
            </thead>
            <tbody>
                {
                    tasks.map((task) => {
                        return <TaskRow task={task} key={task.id} toggleTask={toggleTask} />
                    })
                }
            </tbody>
        </table>
    )
}
export default TaskTable