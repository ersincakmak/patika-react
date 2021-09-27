import React, { useEffect, useState } from "react";

const Index = ({ todoList, setTodoList, setViewedTodos }) => {

  const [filterBy, setfilterBy] = useState("all")


  const clear = () => {
    setTodoList(todoList.filter(todo => !todo.completed))
  }

  useEffect(() => {
    filterBy === "all" ? setViewedTodos(todoList) : filterBy === "active" ? setViewedTodos(todoList.filter(todo => !todo.completed)) : setViewedTodos(todoList.filter(todo => todo.completed))
  }, [filterBy, todoList])

  if (!todoList.length) {
    return null
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todoList.length}</strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a className={filterBy === "all" ? "selected" : ""} onClick={() => setfilterBy("all")}>All</a>
        </li>
        <li>
          <a className={filterBy === "active" ? "selected" : ""} onClick={() => setfilterBy("active")}>Active</a>
        </li>
        <li>
          <a className={filterBy === "completed" ? "selected" : ""} onClick={() => setfilterBy("completed")}>Completed</a>
        </li>
      </ul>

      {todoList.some(item => item.completed) && <button className="clear-completed" onClick={clear}>Clear completed</button>}
    </footer>
  );
};

export default Index;
