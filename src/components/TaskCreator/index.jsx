import { useState } from 'react'

const TaskCreator = ({ createTask }) => {
    const [newTask, setNewTask] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask(newTask)
        setNewTask('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter a new task' onChange={(e) => setNewTask(e.target.value)} value={newTask} />
                <button>Save Task</button>
            </form>
        </div>
    )
}
export default TaskCreator