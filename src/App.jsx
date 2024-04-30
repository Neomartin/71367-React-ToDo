import { useRef, useState } from 'react';
import './App.css';
import TodoList from './components/todo-list/TodoList';


function App() {
  const [ todos, setTodos ] = useState(
    JSON.parse(localStorage.getItem("savedTodos")) || []
  );

  const [ inputError, setInputError ] = useState(false);
  
  const inputRef = useRef();

  function deleteTodo(id) {
    // Borrar el elemento con el id indicado
    const nuevoArray = todos.filter(todo => todo.id !== id)

    setTodos(nuevoArray)

    updateLocalStorage(nuevoArray)
    
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
      setTodos( [ ...todos, newTodo ] );

      setInputError(false)
      
      updateLocalStorage([ ...todos, newTodo ])

      inputRef.current.value = "";
      // inputRef.current.focus();
    } else if(evento.key === "Enter") {
      //mostrar el mensaje de error
      setInputError(true)
    }
  }

  function handleTodoCompleted(id) {

    // const nuevoArrayShort = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)

    // Llammamos al backend update
    // Volver a llamar todos los todos con un GET

    const nuevoArray = todos.map(todo => {

      if(todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;

    })

    setTodos(nuevoArray)
    updateLocalStorage(nuevoArray)
    
  }

  function updateLocalStorage(array) {
    localStorage.setItem("savedTodos", JSON.stringify(array))
  }


  return (
    <>
      <h1 className="todo-list-title">
        TODO LIST REACT
      </h1>
      <hr />
      <div className="input-container">
        <label htmlFor="">Agregar tarea</label>
        <input type="text" onKeyUp={handleAddTodo} ref={inputRef} />

        {  inputError && <div className="input-error">Error en el input</div>  }

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
