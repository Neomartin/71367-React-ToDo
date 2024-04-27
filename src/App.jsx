import { useState } from 'react';
import './App.css';
import TodoList from './components/todo-list/TodoList';

const TODO_LIST = [
  { id: 1, text: 'Tarea 1', completed: false },
  { id: 2, text: 'Tarea 2', completed: true },
  { id: 3, text: 'Tarea 3', completed: false },
  { id: 4, text: 'Tarea 4', completed: true },
  { id: 5, text: 'Tarea 5', completed: false },
]

function App() {
  const [ todos, setTodos ] = useState(TODO_LIST) 

  function deleteTodo(id) {
    // Borrar el elemento con el id indicado
    const nuevoArray = todos.filter(todo => todo.id !== id)
    setTodos(nuevoArray)
  }

  function handleAddTodo(evento) {
    const letterCount = evento.target.value.length;
    if(evento.key === "Enter" && letterCount > 4) {
      //Tomar el valor del input 
      // Generar una neuva tarea
      // id: todos.at(-1).id
      const newTodo = {
        id: crypto.randomUUID(),
        text: evento.target.value,
        completed: false
      }

      // const nuevoArray = [ ...todos, newTodo ];

      // nuevoArray.push(newTodo);
      setTodos( [ ...todos, newTodo ] )
    }
  }

  function handleTodoCompleted(id) {
    console.log(id)
  }


  return (
    <>
      <h1 className="todo-list-title">
        TODO LIST REACT
      </h1>
      <hr />
      <div className="input-container">
        <label htmlFor="">Agregar tarea</label>
        <input type="text" onKeyUp={handleAddTodo} />
      </div>

      <div className="todo-list-container">

        <TodoList todos={todos} 
                  deleteTodoFn={deleteTodo}
                  handleTodoCompleted={handleTodoCompleted}
        />

      </div>
    </>
  )

  
}

export default App
