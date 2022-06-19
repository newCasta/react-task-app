import TaskRow from "../TaskRow"

const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {
    const taskTableRows = (done) => {
        return (
            tasks
                .filter((task) => task.done === done)
                .map((task) => {
                    return <TaskRow task={task} key={task.id} toggleTask={toggleTask} />
                })
        )
    }

    const tableTitle = (done) => {
        if (tasks.filter((task) => task.done === done).length === 0) {
            return 'No tasks'
        }

        return done ? 'Tasks done' : 'Tasks to do'
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>{tableTitle(showCompleted)}</th>
                </tr>
            </thead>
            <tbody>
                {taskTableRows(showCompleted)}
            </tbody>
        </table>
    )
}
export default TaskTable