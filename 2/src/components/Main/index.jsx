import React from 'react'

const index = ({ todoList, setTodoList, viewedTodos }) => {

	const handleCheckChange = (item) => {
		setTodoList(todoList.map(todo => todo.id === item.id ? { ...todo, completed: !todo.completed } : todo))
	}

	const destroy = (item) => {
		setTodoList(todoList.filter(todo => todo.id !== item.id))
	}

	const handleMarkAll = () => {

		const anyUncompleted = todoList.some(item => !item.completed)

		console.log(anyUncompleted)

		if (anyUncompleted) {
			setTodoList(todoList.map(todo => { return { ...todo, completed: true } }))
		} else {
			setTodoList(todoList.map(todo => { return { ...todo, completed: false } }))
		}
	}

	return (
		<section className="main">
			<input className="toggle-all" type="checkbox" checked={todoList.every(item => item.completed)} />
			{todoList?.length ? (
				<label htmlFor="toggle-all" onClick={handleMarkAll} >
					Mark all as complete
				</label>
			) : null}

			<ul className="todo-list">
				{viewedTodos.map((item) => (
					<li className={item.completed ? "completed" : ""} key={item.id}>
						<div className="view">
							<input className="toggle" type="checkbox" checked={item.completed} onChange={() => handleCheckChange(item)} />
							<label>{item.value}</label>
							<button className="destroy" onClick={() => destroy(item)}></button>
						</div>
					</li>
				))}


			</ul>
		</section>
	)
}

export default index
