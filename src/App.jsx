import { useState, useEffect } from 'react'
import './App.css'
import TaskCreator from './components/TaskCreator'
import TaskTable from './components/TaskTable'
import { v4 as uuidv4 } from 'uuid'
import VisibilityControl from './components/VisibilityControl'

function App() {
	const [tasks, setTasks] = useState([])
	const [showCompleted, setShowCompleted] = useState(false)

	useEffect(() => {
		const data = localStorage.getItem('tasks')

		if (data) {
			setTasks(JSON.parse(data))
		}
	}, [])

	useEffect(() => {
		const stringifyTasks = JSON.stringify(tasks)

		localStorage.setItem('tasks', stringifyTasks)
	}, [tasks])

	const createTask = (taskName) => {
		const repeatedTask = tasks.find(task => task.name === taskName)

		if (!repeatedTask) {
			setTasks([...tasks, { id: uuidv4(), name: taskName, done: false }])
		}
	}

	const toggleTask = (taskId) => {
		setTasks(tasks.map(task => task.id === taskId ? { ...task, done: !task.done } : task))
	}

	const deleteDoneTasks = () => {
		setTasks(tasks.filter(task => !task.done))
	}

	return (
		<div className="App">
			<h1 className='tittle'>Task Manager</h1>
			<TaskCreator createTask={createTask} />
			<TaskTable tasks={tasks} toggleTask={toggleTask} />

			<VisibilityControl setShowCompleted={(checked) => setShowCompleted(checked)} deleteDoneTasks={deleteDoneTasks} />

			{
				showCompleted && (
					<TaskTable tasks={tasks} toggleTask={toggleTask} showCompleted={showCompleted} />
				)
			}
		</div>
	)
}

export default App
