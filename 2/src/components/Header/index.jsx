import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Index = ({ addTodo }) => {

	const [todo, setTodo] = useState("")

	const handleEnter = (e) => {
		e.preventDefault()

		if (!todo) {
			return false
		}

		addTodo(ex => [...ex, { id: uuidv4(), value: todo, completed: false }])
		setTodo("")
	}

	return (
		<header className="header">
			<h1>todos</h1>
			<form onSubmit={handleEnter} >
				<input className="new-todo" placeholder="What needs to be done?" value={todo} onChange={e => setTodo(e.target.value)} autoFocus />
			</form>
		</header>
	)
}

export default Index
