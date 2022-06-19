import { useState, useEffect } from 'react'
import './App.css'
import TaskCreator from './components/TaskCreator'
import TaskTable from './components/TaskTable'
import { v4 as uuidv4 } from 'uuid'

function App() {
	const [tasks, setTasks] = useState([])

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

	return (
		<div className="App">
			<TaskCreator createTask={createTask} />
			<TaskTable tasks={tasks} toggleTask={toggleTask} />
		</div>
	)
}

export default App
