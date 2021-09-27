import { useState } from "react";
import "./app.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [todoList, setTodoList] = useState([]);

  const [viewedTodos, setViewedTodos] = useState(todoList);

  return (
    <section className="todoapp">
      <Header addTodo={setTodoList} />
      <Main
        todoList={todoList}
        setTodoList={setTodoList}
        viewedTodos={viewedTodos}
      />
      <Footer
        todoList={todoList}
        setTodoList={setTodoList}
        setViewedTodos={setViewedTodos}
      />
    </section>
  );
}

export default App;
