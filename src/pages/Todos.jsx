import React, {useState, useEffect} from 'react'

const Todos = () => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
      fetch('http://jsonplaceholder.typicode.com/todos')
      .then((res)=> res.json())
      .then((todos) => setTodos(todos))
    }, [])
    
  return (
    <div className='container'>
        <h2> Hi, this is my To Do List</h2>
        {todos.map((todo) => {
            return(
                <h4 key={todo.id}> ({todo.id}). {todo.title} </h4>
            )
        })}
    </div>
  )
}

export default Todos