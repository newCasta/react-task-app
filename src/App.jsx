import './App.css'
import { useState } from 'react'

function App() {
	const [newTaskName, setNewTaskName] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder='Enter a new task' onChange={(e) => setNewTaskName(e.target.value)} />
				<button onClick={() => alert(newTaskName)}>Save Task</button>
			</form>
		</div>
	)
}

export default App
