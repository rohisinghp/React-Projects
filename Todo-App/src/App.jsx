import React, { useEffect, useState } from "react";
import { TodoProvider } from "./context/TodoContext";
import AllinOne from "./components/allinOne";


function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo)=>{
    setTodos((prev)=> [{id: Date.now() , ...todo} , ...prev])
  }

  const updateTodo = (id , todo)=> {
    setTodos((prev) => prev.map((prevtodo)=> prevtodo.id===id ? todo : prevtodo))
  }

  const deleteTodo = (id)=>{
    setTodos((prev)=> prev.filter(prevtodo => prevtodo.id !== id ))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map(prevtodo => prevtodo.id === id ?{...prevtodo , completed: !prevtodo.completed} : prevtodo))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length)
      setTodos(todos);
  },[])

 useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
 },[todos])

  return (
    <>
    
      <TodoProvider value={{todos, addTodo, updateTodo , deleteTodo, toggleComplete}}>
            {/* <AllinOne todos={todos}/> */}
            <AllinOne/>
      </TodoProvider>
    </>
  )
}

export default App
